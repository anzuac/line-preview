(function () {
  // ========= 商品資料 =========
  const PRODUCTS = [
    { name: '臺虎精釀生啤酒（嗨）', size: '330ml', deal: '2件79', type: 'promo' },
    { name: '極FINTITY海鹽荔枝調酒', size: '500ml', deal: '特價78', type: 'promo' },
    { name: '極FINTITY青梅調酒', size: '500ml', deal: '特價78', type: 'promo' },

    { name: '台啤水果啤酒（鳳梨／芒果／葡萄／蜂蜜）', size: '330ml', deal: '原價32', type: 'original' },
    { name: '台灣啤酒微醺（百香芒果／芭樂／草莓）', size: '340ml', deal: '2件62', type: 'promo' },
    { name: '台灣啤酒爽啤', size: '330ml', deal: '原價26', type: 'original' },

    { name: '台灣啤酒18天', size: '330ml', deal: '（優惠依門市）', type: 'promo' },
    { name: '台灣啤酒', size: '330ml', deal: '會員價6件169', type: 'promo' },
    { name: '金牌台灣啤酒', size: '330ml', deal: '會員價6件175', type: 'promo' },

    { name: '金牌ONE台灣啤酒', size: '330ml', deal: '特價3件90', type: 'promo' },
    { name: '金牌ONE台灣啤酒', size: '500ml', deal: '特價2件80', type: 'promo' },

    { name: '台灣啤酒爽啤', size: '500ml', deal: '原價36', type: 'original' },

    { name: '金牌台灣啤酒', size: '500ml', deal: '會員價4件165', type: 'promo' },
    { name: '台灣啤酒', size: '500ml', deal: '會員價4件153', type: 'promo' },
    { name: '台灣啤酒', size: '600ml', deal: '會員價48', type: 'promo' },
    { name: '金牌台灣啤酒', size: '600ml', deal: '會員價50', type: 'promo' },
    { name: '台灣18天生啤酒', size: '600ml', deal: '特價69', type: 'promo' },

    { name: '惠比壽啤酒', size: '330ml', deal: '特價35', type: 'promo' },
    { name: '朝日SUPERDAY啤酒', size: '350ml', deal: '原價46', type: 'original' },
    { name: 'Sapporo生啤酒黑標', size: '350ml', deal: '特價2件74', type: 'promo' },

    { name: 'RIO微醺（乳酸／葡萄／白桃／烏龍）雞尾酒', size: '330ml', deal: '特價49', type: 'promo' },
    { name: '強爽（白桃／蘋果西打風味）雞尾酒', size: '500ml', deal: '特價93', type: 'promo' },

    { name: '可樂娜零酒精（玻璃瓶）', size: '300ml', deal: '特價39', type: 'promo' },
    { name: '百威啤酒（玻璃瓶）', size: '330ml', deal: '原價49', type: 'original' },
    { name: '海尼根星銀（玻璃瓶）', size: '330ml', deal: '特價52', type: 'promo' },
    { name: '海尼根', size: '710ml', deal: '特價85', type: 'promo' },
    { name: '雪山啤酒（玻璃瓶）', size: '580ml', deal: '原價79', type: 'original' },
    { name: '虎牌啤酒（玻璃瓶）', size: '600ml', deal: '特價64', type: 'promo' },
    { name: '海尼根啤酒（玻璃瓶）', size: '600ml', deal: '特價89', type: 'promo' },
    { name: '海尼根星銀（玻璃瓶）', size: '600ml', deal: '特價2件165', type: 'promo' },
    { name: '百威啤酒（玻璃瓶）', size: '600ml', deal: '原價86', type: 'original' },
    { name: 'SAPPORO生啤酒黑標', size: '633ml', deal: '特價99', type: 'promo' },

    { name: '微醉雞尾酒（白色沙瓦／乳酸沙瓦／葡萄沙瓦／白葡萄沙瓦／紅茶沙瓦／梅酒蘇打）', size: '350ml', deal: '特價2件88', type: 'promo' },
    { name: '-196度C強冽（雙重檸檬／葡萄柚）', size: '350ml', deal: '特價2件136', type: 'promo' },
    { name: '-196度C強冽無糖沖繩檸檬', size: '350ml', deal: '特價29', type: 'promo' },
    { name: '106度C強冽雙重葡萄', size: '500ml', deal: '特價93', type: 'promo' },

    { name: '海尼根', size: '330ml', deal: '特價2件69', type: 'promo' },
    { name: '海尼根0酒精', size: '330ml', deal: '特價2件65', type: 'promo' },
    { name: '海尼根', size: '500ml', deal: '特價2件99', type: 'promo' },
    { name: '海尼根星銀', size: '500ml', deal: '特價2件99', type: 'promo' },

    { name: '虎牌啤酒', size: '330ml', deal: '特價2件59', type: 'promo' },
    { name: '虎牌冰釀啤酒', size: '330ml', deal: '特價2件59', type: 'promo' },
    { name: '海尼根星銀', size: '330ml', deal: '特價2件69', type: 'promo' },
    { name: '虎牌啤酒', size: '500ml', deal: '特價2件83', type: 'promo' },
    { name: '虎牌冰釀啤酒', size: '500ml', deal: '特價2件75', type: 'promo' },
    { name: '西貢拉格啤酒', size: '330ml', deal: '特價2件89', type: 'promo' },

    { name: '紅馬烈啤酒', size: '330ml', deal: '原價34', type: 'original' },
    { name: '客斯啤酒', size: '330ml', deal: '特價2件79', type: 'promo' },
    { name: '艾德懷斯白啤酒', size: '500ml', deal: '特價2件108', type: 'promo' },
    { name: '紅馬烈', size: '500ml', deal: '原價58', type: 'original' },
    { name: '健力士醇黑生啤酒', size: '440ml', deal: '特價60', type: 'promo' },

    { name: '百威啤酒', size: '500ml', deal: '特價2件116', type: 'promo' },
    { name: '百威尊啤酒', size: '500ml', deal: '特價2件130', type: 'promo' },
    { name: '雪山啤酒', size: '500ml', deal: '特價2件98', type: 'promo' },
    { name: '朝日SUPERDAY啤酒', size: '500ml', deal: '原價64', type: 'original' },

    { name: '百威啤酒', size: '330ml', deal: '特價2件86', type: 'promo' },
    { name: '雪山啤酒', size: '330ml', deal: '特價3件105', type: 'promo' },
    { name: '雪山晶鑽啤酒', size: '330ml', deal: '特價3件111', type: 'promo' },
    { name: '百威金尊啤酒', size: '330ml', deal: '特價2件94', type: 'promo' },

    { name: '麒麟霸啤酒', size: '330ml', deal: '特價3件83', type: 'promo' },
    { name: '麒麟霸啤酒', size: '500ml', deal: '特價2件85', type: 'promo' },
    { name: '麒麟一番榨啤酒', size: '500ml', deal: '特價2件100', type: 'promo' },
    { name: '麒麟一番榨零糖質啤酒', size: '500ml', deal: '特價2件105', type: 'promo' },
    { name: '淡麗GREEN LABEL 啤酒', size: '500ml', deal: '特價2件102', type: 'promo' },
    { name: 'KIRIN本麒麟香之舞', size: '500ml', deal: '特價65', type: 'promo' },
    { name: '麒麟一番榨啤酒', size: '330ml', deal: '特價3件102', type: 'promo' },
    { name: '淡麗GREEN LABEL 啤酒', size: '330ml', deal: '特價3件105', type: 'promo' },
    { name: '麒麟一番榨零糖質啤酒', size: '330ml', deal: '特價3件105', type: 'promo' },
    { name: '麒麟一番榨白啤酒', size: '330ml', deal: '特價2件69', type: 'promo' },
    { name: '麒麟一番榨風啤酒', size: '330ml', deal: '特價2件75', type: 'promo' },

    { name: '朝日零糖質啤酒', size: '330ml', deal: '原價47', type: 'original' },

    { name: 'KIRIN冰結 無糖和梨', size: '350ml', deal: '特價2件129', type: 'promo' },
    { name: 'KIRIN冰結無糖檸檬', size: '350ml', deal: '特價2件125', type: 'promo' },
    { name: 'KIRIN冰結華麗白葡萄', size: '350ml', deal: '特價2件79', type: 'promo' },
    { name: 'KIRIN冰結愛媛奇異果', size: '350ml', deal: '特價2件89', type: 'promo' },
    { name: 'KIRIN冰結甘王草莓', size: '350ml', deal: '特價2件89', type: 'promo' },
    { name: 'KIRIN冰結華麗巨峰葡萄', size: '350ml', deal: '特價2件99', type: 'promo' },

    { name: '立陶宛卡納經典拉格啤酒5%', size: '500ml', deal: '特價3件119', type: 'promo' },
    { name: 'KIRIN本搾調酒鳳梨', size: '500ml', deal: '特價39', type: 'promo' },
    { name: '世界記行山梨白桃沙瓦6%', size: '500ml', deal: '特價52', type: 'promo' },

    { name: '波蘭海納棕熊強啤酒10%', size: '500ml', deal: '特價45', type: 'promo', excludePhase1: true, note: '3/3以前不加入活動' },

    { name: '波蘭愛德美IPA4.7%啤酒', size: '500ml', deal: '特價3件129', type: 'promo' },
    { name: '波蘭城市之旅5.0啤酒', size: '500ml', deal: '特價3件119', type: 'promo' },
    { name: '波蘭范布爾頂級啤酒8.5%', size: '500ml', deal: '特價3件129', type: 'promo' },
    { name: '波蘭范布爾經典金黃啤酒6.6%', size: '500ml', deal: '特價3件129', type: 'promo' },
    { name: '波蘭范布爾修道院啤酒6.5%', size: '500ml', deal: '特價3件129', type: 'promo' },

    { name: '日本寶酒造農園 爵香白葡萄氣泡酒', size: '350ml', deal: '特價52', type: 'promo' },
    { name: '日本寶酒造農園 沖繩恩鳳梨氣泡酒', size: '350ml', deal: '特價49', type: 'promo' },
    { name: '日本寶燒彈珠汽水口味啤酒', size: '350ml', deal: '特價49', type: 'promo' },
    { name: '日本寶燒檸檬口味啤酒', size: '350ml', deal: '原價55', type: 'original' },

    { name: 'Sour3沙瓦草莓紅酒風味', size: '350ml', deal: '特價2件84', type: 'promo' },
    { name: 'Sour3沙瓦蘋果風味', size: '350ml', deal: '特價2件69', type: 'promo' },
    { name: 'Sour3沙瓦水蜜桃風味', size: '350ml', deal: '特價2件69', type: 'promo' },

    { name: '日本小確幸富士蘋果風味氣泡酒', size: '350ml', deal: '特價49', type: 'promo' },
    { name: '日本女王香檳白葡萄／葡萄無酒精啤酒', size: '350ml', deal: '特價29', type: 'promo' },

    { name: '法國皇家拉格啤酒5.0%', size: '330ml', deal: '特價3件72', type: 'promo' },
    { name: '西班牙米斯特4.8%啤酒', size: '330ml', deal: '特價3件75', type: 'promo' },
    { name: '丹麥司洛特皮爾森', size: '330ml', deal: '特價3件69', type: 'promo' },
    { name: '丹麥司洛5.9%特金黃啤酒', size: '330ml', deal: '特價3件72', type: 'promo' },
    { name: '德國布魯諾4.8%啤酒', size: '330ml', deal: '特價3件72', type: 'promo' },

    { name: '立陶宛坦格小麥精釀啤酒5.0%', size: '440ml', deal: '特價2件99', type: 'promo' },
    { name: '立陶宛坦格重裝IPA精釀啤酒5.8%', size: '440ml', deal: '特價2件109', type: 'promo' },
    { name: '立陶宛坦格精選拉格啤酒5.0%', size: '500ml', deal: '特價3件112', type: 'promo' },
    { name: '立陶宛坦格桑拿拉格啤酒5.0%', size: '500ml', deal: '特價3件119', type: 'promo' },
    { name: '立陶宛坦格IPA精釀啤酒5.2%', size: '500ml', deal: '特價2件99', type: 'promo' },

    { name: '德國柏格金啤酒', size: '500ml', deal: '特價3件112', type: 'promo' },
    { name: '皇家老修士啤酒', size: '500ml', deal: '特價3件112', type: 'promo' },
    { name: '客斯Light零糖質啤酒', size: '500ml', deal: '特價2件99', type: 'promo' },
    { name: '法國1664拉格啤酒5.0%', size: '500ml', deal: '特價2件99', type: 'promo' },
    { name: '法國星格頂級拉格啤酒5.0%', size: '500ml', deal: '特價3件119', type: 'promo' },

    { name: '捷克布拉格頂級黑啤酒4.4%', size: '500ml', deal: '特價2件99', type: 'promo' },
    { name: '捷克布拉格頂級拉格啤酒4.8%', size: '500ml', deal: '特價2件99', type: 'promo' },

    { name: '德國黑公爵金牌啤酒4.9%', size: '500ml', deal: '特價3件102', type: 'promo' },
    { name: '德國黑公爵小麥啤酒5.3%', size: '500ml', deal: '特價3件119', type: 'promo' },
    { name: '德國黑公爵黑啤酒5%', size: '500ml', deal: '特價3件119', type: 'promo' },

    { name: '豪格登小麥啤酒', size: '500ml', deal: '特價2件139', type: 'promo' },
    { name: '西班牙克沛維拉格啤酒5.0%', size: '500ml', deal: '特價3件112', type: 'promo' },
    { name: '西班牙米斯特12%啤酒', size: '500ml', deal: '特價3件139', type: 'promo' },
    { name: '皇家卡帕基金牌啤酒', size: '500ml', deal: '特價3件108', type: 'promo' },
    { name: '皇家雙B9%啤酒', size: '500ml', deal: '特價3件129', type: 'promo' },
    { name: '土耳其EFES皮爾森啤酒5%', size: '500ml', deal: '特價3件119', type: 'promo' },
    { name: '德國哈伯熊金牌啤酒5.0%', size: '500ml', deal: '特價3件112', type: 'promo' },

    { name: '比利時Martens金牌啤酒4.6%', size: '500ml', deal: '特價2件99', type: 'promo' },
    { name: '比利時Martens頂級啤酒5.2%', size: '500ml', deal: '特價2件99', type: 'promo' },
  ];

  // ========= 階段配置 =========
  function getPhaseConfig(phaseKey) {
    if (phaseKey === 'phase1') {
      return {
        title: '商品明細｜第一階段特價（至 03/03）',
        note: '第一階段顯示完整清單（原價＋特價/會員價）。實際品項與優惠以門市系統判定為準。',
        showPromoPrice: true,
        comboText: '（第一階段組合特價內容依門市）',
      };
    }
    if (phaseKey === 'phase2') {
      return {
        title: '商品明細｜第二階段特價（03/04–03/31）',
        note: '第二階段顯示完整商品清單；特價/會員價與組合優惠請以門市公告為準。',
        showPromoPrice: false,
        comboText: '<span style="font-weight:900; color:#ff0080;">請到門市查看</span>',
      };
    }
    if (phaseKey === 'phase3') {
      return {
        title: '商品明細｜第三階段特價（04/01–04/28）',
        note: '第三階段顯示完整商品清單；特價/會員價與組合優惠請以門市公告為準。',
        showPromoPrice: false,
        comboText: '<span style="font-weight:900; color:#ff0080;">請到門市查看</span>',
      };
    }
    return {
      title: '商品明細',
      note: '目前不在可查詢之特價階段範圍內，請洽各門市查詢。',
      showPromoPrice: false,
      comboText: '<span style="font-weight:900; color:#ff0080;">請到門市查看</span>',
    };
  }

  function normalize(s) {
    return String(s || '').toLowerCase().replace(/\s+/g, '');
  }

  function escapeHtml(str) {
    return String(str || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function filterByPhase(list, phaseKey) {
    return list.filter(p => !(phaseKey === 'phase1' && p.excludePhase1));
  }

  function displayDeal(p, cfg) {
    if (p.type === 'original') return p.deal;          // 原價全階段照顯示
    if (cfg.showPromoPrice) return p.deal;             // 第一階段顯示特價
    return '請到門市查看';                              // 第二/三階段特價改門市
  }

  function parseMl(sizeText) {
    const m = String(sizeText || '').match(/(\d+)\s*ml/i);
    return m ? Number(m[1]) : null;
  }

  function parsePrice(dealText) {
    const s = String(dealText || '');
    const m = s.match(/(\d+)\s*$/) || s.match(/(\d+)/);
    return m ? Number(m[1]) : null;
  }

  // 名稱排序：基本 / 筆畫
  const collatorDefault = new Intl.Collator('zh-Hant', { sensitivity: 'base', numeric: true });
  let collatorStroke = null;
  try {
    collatorStroke = new Intl.Collator('zh-Hant-u-co-stroke', { sensitivity: 'base', numeric: true });
  } catch (e) {
    collatorStroke = null;
  }

  // 排序狀態（表頭箭頭用）
  const sortState = {
    key: null,      // 'name' | 'ml' | 'price' | null
    dir: 1,         // 1 asc, -1 desc
    nameMode: 'default', // 'default' | 'stroke'
  };

  function buildModalHTML(cfg) {
    return `
      <div style="line-height:1.8; font-size:15px;">
        <div style="font-weight:900; margin-bottom:6px;">階段說明</div>
        <div style="color:#666; margin-bottom:14px;">${cfg.note}</div>

        <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:10px;">
          <input id="pdSearch" type="search" placeholder="搜尋商品（品牌 / 口味 / 容量）"
            style="flex:1; min-width:220px; padding:12px 12px; border-radius:12px; border:1px solid rgba(0,0,0,.15); outline:none; font-size:15px;" />
          <button type="button" id="btnNameMode"
            style="padding:10px 12px; border-radius:12px; border:1px solid rgba(0,0,0,.15); background:#fff; font-weight:900; cursor:pointer;">
            名稱：基本
          </button>
          <div id="pdCount" style="color:#666; font-size:13px;"></div>
        </div>

        <div style="overflow:auto; border:1px solid rgba(0,0,0,.08); border-radius:12px;">
          <table style="width:100%; border-collapse:collapse; min-width:520px;">
            <thead>
              <tr style="background:#fafafa;">
                <th id="thName" style="text-align:left; padding:10px; font-size:13px; border-bottom:1px solid rgba(0,0,0,.08); cursor:pointer;">
                  商品 <span id="arrName" style="font-size:12px; color:#888;">↕</span>
                </th>
                <th id="thMl" style="text-align:left; padding:10px; font-size:13px; border-bottom:1px solid rgba(0,0,0,.08); white-space:nowrap; cursor:pointer;">
                  容量 <span id="arrMl" style="font-size:12px; color:#888;">↕</span>
                </th>
                <th id="thPrice" style="text-align:left; padding:10px; font-size:13px; border-bottom:1px solid rgba(0,0,0,.08); white-space:nowrap; cursor:pointer;">
                  金額 <span id="arrPrice" style="font-size:12px; color:#888;">↕</span>
                </th>
                <th style="text-align:left; padding:10px; font-size:13px; border-bottom:1px solid rgba(0,0,0,.08); white-space:nowrap;">
                  類型
                </th>
              </tr>
            </thead>
            <tbody id="pdTbody"></tbody>
          </table>
        </div>

        <div style="margin-top:12px; color:#666; font-size:13px;">
          ※ 即期品（門市標示為出清商品者）不參與贈送/優惠計算，實際以門市標示與系統判定為準。
        </div>

        <div style="margin-top:14px;">
          <div style="font-weight:900; margin-bottom:6px;">組合特價</div>
          <div style="color:#222;">${cfg.comboText}</div>
        </div>

        <div style="margin-top:14px; color:#666; font-size:13px;">
          ※ 實際品項、優惠與供貨狀態以門市現場公告與系統判定為準。
        </div>
      </div>
    `;
  }

  function updateArrows() {
    const arrName = document.getElementById('arrName');
    const arrMl = document.getElementById('arrMl');
    const arrPrice = document.getElementById('arrPrice');

    function set(el, active, dir) {
      if (!el) return;
      if (!active) {
        el.textContent = '↕';
        el.style.color = '#888';
        return;
      }
      el.textContent = dir === 1 ? '↑' : '↓';
      el.style.color = '#ff0080';
    }

    set(arrName, sortState.key === 'name', sortState.dir);
    set(arrMl, sortState.key === 'ml', sortState.dir);
    set(arrPrice, sortState.key === 'price', sortState.dir);
  }

  function renderRows(rows, cfg) {
    const tbody = document.getElementById('pdTbody');
    const count = document.getElementById('pdCount');
    if (!tbody) return;

    if (!rows.length) {
      tbody.innerHTML = `<tr><td colspan="4" style="padding:12px; color:#666;">查無符合條件的商品。</td></tr>`;
      if (count) count.textContent = '0 筆';
      return;
    }

    tbody.innerHTML = rows.map(p => {
      const typeBadge = p.type === 'original'
        ? '<span style="display:inline-block;padding:2px 8px;border-radius:999px;background:rgba(0,0,0,.06);font-weight:800;font-size:12px;">原價</span>'
        : '<span style="display:inline-block;padding:2px 8px;border-radius:999px;background:rgba(255,0,128,.10);color:#ff0080;font-weight:900;font-size:12px;">特價</span>';

      const dealShown = displayDeal(p, cfg);

      return `
        <tr>
          <td style="padding:10px; border-bottom:1px solid rgba(0,0,0,.06);">
            <div style="font-weight:900;">${escapeHtml(p.name)}</div>
            ${p.note ? `<div style="color:#666;font-size:12px;margin-top:2px;">${escapeHtml(p.note)}</div>` : ``}
          </td>
          <td style="padding:10px; border-bottom:1px solid rgba(0,0,0,.06); white-space:nowrap;">${escapeHtml(p.size)}</td>
          <td style="padding:10px; border-bottom:1px solid rgba(0,0,0,.06); white-space:nowrap; font-weight:900;">
            ${escapeHtml(dealShown)}
          </td>
          <td style="padding:10px; border-bottom:1px solid rgba(0,0,0,.06); white-space:nowrap;">
            ${typeBadge}
          </td>
        </tr>
      `;
    }).join('');

    if (count) count.textContent = `${rows.length} 筆`;
  }

  function sortList(list, cfg) {
    if (!sortState.key) return list.slice();

    const nameCollator = (sortState.nameMode === 'stroke' && collatorStroke) ? collatorStroke : collatorDefault;
    const dir = sortState.dir;

    const mapped = list.map((p, idx) => {
      const ml = parseMl(p.size);
      const shownDeal = displayDeal(p, cfg);
      const price = parsePrice(shownDeal); // 「請到門市查看」會變 null
      return { p, idx, ml, price, shownDeal };
    });

    mapped.sort((a, b) => {
      if (sortState.key === 'name') {
        const c = nameCollator.compare(a.p.name, b.p.name);
        if (c !== 0) return c * dir;
        return (a.idx - b.idx);
      }

      if (sortState.key === 'ml') {
        // null 排最後
        const ax = (a.ml == null) ? Number.POSITIVE_INFINITY : a.ml;
        const bx = (b.ml == null) ? Number.POSITIVE_INFINITY : b.ml;
        if (ax !== bx) return (ax - bx) * dir;
        // 同容量再用名稱
        const c = nameCollator.compare(a.p.name, b.p.name);
        if (c !== 0) return c;
        return (a.idx - b.idx);
      }

      if (sortState.key === 'price') {
        // null 排最後
        const ap = (a.price == null) ? Number.POSITIVE_INFINITY : a.price;
        const bp = (b.price == null) ? Number.POSITIVE_INFINITY : b.price;
        if (ap !== bp) return (ap - bp) * dir;
        // 同價再用名稱
        const c = nameCollator.compare(a.p.name, b.p.name);
        if (c !== 0) return c;
        return (a.idx - b.idx);
      }

      return a.idx - b.idx;
    });

    return mapped.map(x => x.p);
  }

  // ========= 對外接口（給 main.js 呼叫） =========
  window.openProductDetailModal = function (phaseKey) {
    if (!window.LinePromoModal || typeof window.LinePromoModal.open !== 'function') {
      console.warn('[product-detail] 找不到 LinePromoModal.open，請確認 main.js 已先載入。');
      return;
    }

    // reset sort each open
    sortState.key = null;
    sortState.dir = 1;
    sortState.nameMode = 'default';

    const cfg = getPhaseConfig(phaseKey);
    window.LinePromoModal.open(cfg.title, buildModalHTML(cfg));

    const baseList = filterByPhase(PRODUCTS, phaseKey);

    function getCurrentList() {
      const q = normalize(document.getElementById('pdSearch')?.value || '');
      if (!q) return baseList;

      return baseList.filter(p => {
        const hay = normalize(`${p.name}${p.size}${p.deal}${p.note || ''}`);
        return hay.includes(q);
      });
    }

    function refresh() {
      const list = getCurrentList();
      const sorted = sortList(list, cfg);
      renderRows(sorted, cfg);
      updateArrows();

      const btnNameMode = document.getElementById('btnNameMode');
      if (btnNameMode) {
        const label = (sortState.nameMode === 'stroke' && collatorStroke) ? '筆畫' : '基本';
        btnNameMode.textContent = `名稱：${label}`;
      }
    }

    // 初次渲染
    refresh();

    // 搜尋
    const input = document.getElementById('pdSearch');
    if (input) {
      input.addEventListener('input', refresh);
    }

    // 名稱模式（基本 / 筆畫）
    const btnNameMode = document.getElementById('btnNameMode');
    if (btnNameMode) {
      btnNameMode.addEventListener('click', function () {
        // 沒支援筆畫就不切（維持基本）
        if (!collatorStroke) return;
        sortState.nameMode = (sortState.nameMode === 'default') ? 'stroke' : 'default';
        // 如果目前是名稱排序，立刻生效
        if (sortState.key === 'name') refresh();
        else {
          // 只更新按鈕文字
          const label = sortState.nameMode === 'stroke' ? '筆畫' : '基本';
          btnNameMode.textContent = `名稱：${label}`;
        }
      });
    }

    // 表頭點擊排序（箭頭）
    const thName = document.getElementById('thName');
    const thMl = document.getElementById('thMl');
    const thPrice = document.getElementById('thPrice');

    function toggleSort(key) {
      if (sortState.key === key) {
        sortState.dir = sortState.dir * -1; // 同欄位就翻轉 ↑↓
      } else {
        sortState.key = key;
        sortState.dir = 1; // 新欄位預設升冪
      }
      refresh();
    }

    if (thName) thName.addEventListener('click', () => toggleSort('name'));
    if (thMl) thMl.addEventListener('click', () => toggleSort('ml'));
    if (thPrice) thPrice.addEventListener('click', () => toggleSort('price'));
  };
})();