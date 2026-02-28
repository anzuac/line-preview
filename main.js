(function () {
  const backdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const btnClose = document.getElementById('modalClose');
  const btnOk = document.getElementById('modalOk');

  const btnProductStatus = document.getElementById('btnProductStatus');
  const btnComboDetail = document.getElementById('btnComboDetail');

  if (!backdrop || !modalTitle || !modalBody || !btnClose || !btnOk || !btnProductStatus || !btnComboDetail) {
    console.warn('[Modal] 缺少必要元素，請確認 index.html 的 id 是否一致。');
    return;
  }

  // ✅ Spck / WebView 也穩的背景鎖定（取代 overflow:hidden）
  let __scrollY = 0;
  function lockScroll() {
    __scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${__scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }
  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, __scrollY);
  }

  function openModal(title, html) {
    modalTitle.textContent = title;
    modalBody.innerHTML = html;
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    lockScroll(); // ✅ 改這裡
  }

  function closeModal() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    unlockScroll(); // ✅ 改這裡
  }

  // 給其他 JS 用（商品明細）
  window.LinePromoModal = { open: openModal, close: closeModal };

  // ====== ✅ 三階段特價排程（台灣時間 +08:00） ======
  const PROMO_SCHEDULE = [
    {
      key: 'phase1',
      label: '第一階段特價（至 03/03）',
      start: '2026-02-28T00:00:00+08:00',
      end:   '2026-03-03T23:59:59+08:00',
      statusHint: '第一階段特價進行中。'
    },
    {
      key: 'phase2',
      label: '第二階段特價（03/04–03/31）',
      start: '2026-03-04T00:00:00+08:00',
      end:   '2026-03-31T23:59:59+08:00',
      statusHint: '第二階段特價進行中，實際內容依門市公告為準。'
    },
    {
      key: 'phase3',
      label: '第三階段特價（04/01–04/28）',
      start: '2026-04-01T00:00:00+08:00',
      end:   '2026-04-28T23:59:59+08:00',
      statusHint: '第三階段特價進行中，實際內容依門市公告為準。'
    }
  ];

  function getCurrentPromoPhase(now = new Date()) {
    for (const s of PROMO_SCHEDULE) {
      const a = new Date(s.start);
      const b = new Date(s.end);
      if (now >= a && now <= b) return s;
    }
    return null;
  }

  const currentPhase = getCurrentPromoPhase(new Date());

  // 主視覺 sub 追加階段資訊（不改你原本期間文字，只追加）
  const subEl = document.querySelector('.sub');
  if (subEl && currentPhase) {
    subEl.innerHTML = `${subEl.innerHTML}　｜　${currentPhase.label}`;
  }

  // ✅ 商品優惠狀態：彈窗 + 商品明細按鈕
  btnProductStatus.addEventListener('click', function () {
    const phaseLine = currentPhase ? currentPhase.label : '（未落在特價階段）';
    const hint = currentPhase ? currentPhase.statusHint : '請洽各門市查詢。';

    openModal('商品優惠狀態', `
      <div style="line-height:1.8; font-size:15px;">
        <div style="font-weight:900; font-size:15px; margin-bottom:6px;">目前階段：${phaseLine}</div>

        <div style="font-weight:900; font-size:16px; margin-bottom:8px;">請洽各門市查詢</div>

        <div style="color:#666; margin-bottom:14px;">
          ${hint}<br>
          各門市實際優惠狀態與現場供應情形可能不同，請以門市現場公告與人員說明為準。
        </div>

        <button type="button" id="btnProductDetailModal"
          style="
            width:100%;
            padding:14px 16px;
            border-radius:14px;
            font-weight:900;
            font-size:15px;
            border:2px solid #ff0080;
            background:#fff;
            color:#ff0080;
            cursor:pointer;
          ">
          商品明細
        </button>
      </div>
    `);

    const detailBtn = document.getElementById('btnProductDetailModal');
    if (detailBtn) {
      detailBtn.addEventListener('click', function () {
        if (window.openProductDetailModal) {
          window.openProductDetailModal(currentPhase ? currentPhase.key : null);
        } else {
          openModal('商品明細', `<div style="color:#666;">（尚未載入商品明細功能：請確認 product-detail.js 已引入）</div>`);
        }
      });
    }
  });

btnComboDetail.addEventListener('click', function () {
  openModal('組合贈送詳細說明', `
    <div style="line-height:1.8; font-size:15px;">

      <div style="font-weight:900; margin-bottom:8px;">優惠方式說明</div>
      1. 本活動贈送之商品金額，係以符合活動條件之商品組合中，依特價後金額計算，取最低價商品作為贈送商品。<br><br>
      2. 即期品（指門市標示為出清商品者）不列入本活動贈送計算範圍，亦不參與贈送優惠。<br><br>

      <div style="font-weight:900; margin:12px 0 6px 0;">計算範例說明（符合 9 罐門檻）</div>
      例如：消費者購買 9 罐符合活動之商品（以下金額皆以特價後金額為例）：<br>
      （50 + 49 + 45 + 45 + 55 + 55 + 49 + 50 + 55）<br><br>

      合計金額為：<strong>453 元</strong>。<br>
      其中最低價為 <strong>45 元</strong>，因此其中 <strong>1 罐 45 元</strong> 為贈送商品。<br><br>

      實際應付金額為：<strong>453 − 45 = 408 元</strong>。<br>
      若最低價同價有多罐（本例 45 元有 2 罐），由系統判定其中 1 罐作為贈送商品，其餘商品仍維持原本特價/組合特價規則計算。<br><br>

<div style="font-weight:900; margin:12px 0 6px 0;">計算範例說明（三入 119 + 另外 6 罐）</div>
例如：消費者購買以下 9 罐商品：<br>
（39 + 40 + 40）+（52 + 53 + 55 + 58 + 60 + 65）<br><br>

三入特價為 119 元，其餘 6 罐合計為 343 元。<br>
總金額為：<strong>119 + 343 = 462 元</strong>。<br><br>

其中最低價為 <strong>39 元</strong>，因此該罐為贈送商品。<br>
實際應付金額為：<strong>462 − 39 = 423 元</strong>。<br>
其餘 8 罐仍依原本特價/組合特價規則計算。
      <div style="font-weight:900; margin:12px 0 6px 0;">退貨說明</div>
      3. 如辦理退貨後，剩餘商品數量未達 9 件活動門檻，則不適用本卡贈送優惠，商品將維持原組合特價計算。<br><br>
      4. 若因退貨導致實際付款金額不足原應付金額者，消費者須補足差額後方可完成退貨程序。<br><br>

      本活動實際優惠計算方式依門市系統判定及現場公告為準。
    </div>
  `);
});
  // 關閉行為
  btnClose.addEventListener('click', closeModal);
  btnOk.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) closeModal();
  });
})();