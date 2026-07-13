// script.js - Interactive behavior for the profile portfolio gallery

const INTEREST_DATA = {
  'short-film': {
    themeClass: 'theme-short-film',
    titleText: '단편영화',
    descText: '짧지만 강렬한 이야기와 감성을 담은 영상 프로젝트들을 모았습니다.'
  },
  contest: {
    themeClass: 'theme-contest',
    titleText: '공모전',
    descText: '아이디어와 표현력을 겨루는 공모전 출품 영상들을 소개합니다.'
  },
  documentary: {
    themeClass: 'theme-documentary',
    titleText: '다큐멘터리',
    descText: '현실을 섬세하게 다루는 기록형 프로젝트들을 모았습니다.'
  },
  'other-projects': {
    themeClass: 'theme-other',
    titleText: '기타 프로젝트',
    descText: '다양한 크리에이티브 실험과 협업 프로젝트를 확인해보세요.'
  }
};

const PORTFOLIO_DATA = {
  'short-film': [
    {
      title: 'ROMEO: 눈을 가진 죄',
      category: 'Short Film',
      description: '감정의 떨림과 공간의 긴장감을 함께 담아낸 미니멀한 시네마틱 단편입니다.',
      roles: ['기획', '촬영', '편집'],
      videoUrl: 'https://youtu.be/UAXaxqroUwo?si=Ccamf6erF1Xkf5kx',
      detailUrl: 'https://youtu.be/UAXaxqroUwo?si=Ccamf6erF1Xkf5kx',
      thumbUrl: 'https://img.youtube.com/vi/UAXaxqroUwo/hqdefault.jpg'
    },
    {
      title: 'Numb – Linkin Park',
      category: 'Music Video',
      description: '몰입감 있는 연출과 정제된 편집으로 음악의 감성을 강조했습니다.',
      roles: ['기획', '모션그래픽', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      detailUrl: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      thumbUrl: 'https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg'
    },
    {
      title: 'Flexin On Ya',
      category: 'Visual Test',
      description: '시각적인 리듬감을 살려 빠른 컷과 간결한 구성을 실험한 작업입니다.',
      roles: ['촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      detailUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      thumbUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg'
    },
    {
      title: 'Nothing Else Matters',
      category: 'Performance Film',
      description: '공간과 음악의 조화를 중심으로 한 조용하지만 강렬한 영상 프로젝트입니다.',
      roles: ['기획', '촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=tAGnKpE4NCI',
      detailUrl: 'https://www.youtube.com/watch?v=tAGnKpE4NCI',
      thumbUrl: 'https://img.youtube.com/vi/tAGnKpE4NCI/hqdefault.jpg'
    }
  ],
  contest: [
    {
      title: 'RickRoll\'D',
      category: 'Contest Entry',
      description: '인터랙티브한 아이디어와 직관적인 구성으로 짧은 메시지를 효과적으로 전달했습니다.',
      roles: ['기획', '촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      detailUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      thumbUrl: 'https://img.youtube.com/vi/oHg5SJYRHA0/hqdefault.jpg'
    },
    {
      title: 'Nice Ocean Waves',
      category: 'Motion Piece',
      description: '부드러운 움직임과 여백을 활용해 차분한 분위기의 시각 작품을 완성했습니다.',
      roles: ['촬영', '모션그래픽'],
      videoUrl: 'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
      detailUrl: 'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
      thumbUrl: 'https://img.youtube.com/vi/V-_O7nl0Ii0/hqdefault.jpg'
    },
    {
      title: 'Never Gonna Give You Up',
      category: 'Reinterpretation',
      description: '익숙한 소재를 새롭게 해석해 현대적인 톤으로 재구성한 작업입니다.',
      roles: ['기획', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=DLzxrzFCyOs',
      detailUrl: 'https://www.youtube.com/watch?v=DLzxrzFCyOs',
      thumbUrl: 'https://img.youtube.com/vi/DLzxrzFCyOs/hqdefault.jpg'
    },
    {
      title: 'Gangnam Style',
      category: 'Culture Piece',
      description: '강렬한 에너지와 리듬감을 유지하면서도 메시지를 깔끔하게 정리한 영상입니다.',
      roles: ['촬영', '편집', '모션그래픽'],
      videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      detailUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      thumbUrl: 'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg'
    }
  ],
  documentary: [
    {
      title: 'All Star',
      category: 'Documentary Mood',
      description: '현실의 흐름을 보존하면서도 감정선이 살아나는 방식으로 구성된 기록형 영상입니다.',
      roles: ['기획', '촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=L_jWHffIx5E',
      detailUrl: 'https://www.youtube.com/watch?v=L_jWHffIx5E',
      thumbUrl: 'https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg'
    },
    {
      title: 'Radioactive',
      category: 'Storytelling',
      description: '사건과 인물의 맥락을 자연스럽게 이어주며 깊이 있는 내러티브를 담아냈습니다.',
      roles: ['촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=ktvTqknDobU',
      detailUrl: 'https://www.youtube.com/watch?v=ktvTqknDobU',
      thumbUrl: 'https://img.youtube.com/vi/ktvTqknDobU/hqdefault.jpg'
    },
    {
      title: 'The Lazy Song',
      category: 'Observation',
      description: '일상의 리듬을 포착해 따뜻하면서도 유쾌한 흐름으로 재해석한 작업입니다.',
      roles: ['기획', '촬영'],
      videoUrl: 'https://www.youtube.com/watch?v=fLexgOxsZu0',
      detailUrl: 'https://www.youtube.com/watch?v=fLexgOxsZu0',
      thumbUrl: 'https://img.youtube.com/vi/fLexgOxsZu0/hqdefault.jpg'
    },
    {
      title: 'Roar',
      category: 'Narrative Piece',
      description: '인물의 내면과 외부 환경을 하나의 흐름으로 연결해 시청각적으로 정돈했습니다.',
      roles: ['촬영', '편집', '모션그래픽'],
      videoUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
      detailUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
      thumbUrl: 'https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg'
    }
  ],
  'other-projects': [
    {
      title: 'Faded',
      category: 'Experimental',
      description: '감각적인 이미지와 간결한 구성으로 분위기 있는 몰입감을 설계한 작업입니다.',
      roles: ['기획', '모션그래픽'],
      videoUrl: 'https://www.youtube.com/watch?v=60ItHLz5WEA',
      detailUrl: 'https://www.youtube.com/watch?v=60ItHLz5WEA',
      thumbUrl: 'https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg'
    },
    {
      title: 'See You Again',
      category: 'Collaborative',
      description: '다양한 시점과 연출 요소를 조합해 서사와 감정을 함께 전달했습니다.',
      roles: ['기획', '촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=RgKAFK5djSk',
      detailUrl: 'https://www.youtube.com/watch?v=RgKAFK5djSk',
      thumbUrl: 'https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg'
    },
    {
      title: 'Sugar',
      category: 'Brand Story',
      description: '부드러운 전환과 정돈된 정보 구조로 브랜드 감성을 세밀하게 다뤘습니다.',
      roles: ['촬영', '편집'],
      videoUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
      detailUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
      thumbUrl: 'https://img.youtube.com/vi/09R8_2nJtjg/hqdefault.jpg'
    },
    {
      title: 'Love The Way You Lie',
      category: 'Visual Research',
      description: '강한 감정선을 유지하면서도 정돈된 시각적 흐름을 만들기 위해 실험한 작업입니다.',
      roles: ['기획', '편집', '모션그래픽'],
      videoUrl: 'https://www.youtube.com/watch?v=uelHwf8o7_U',
      detailUrl: 'https://www.youtube.com/watch?v=uelHwf8o7_U',
      thumbUrl: 'https://img.youtube.com/vi/uelHwf8o7_U/hqdefault.jpg'
    }
  ]
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function createPortfolioCardMarkup(item) {
  const rolesMarkup = item.roles.map(role => `<span class="portfolio-role-badge">${escapeHtml(role)}</span>`).join('');

  return `
    <article class="portfolio-card">
      <div class="portfolio-card-media">
        <a href="${escapeHtml(item.videoUrl)}" class="portfolio-card-thumb-link" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(item.title)}">
          <img src="${escapeHtml(item.thumbUrl)}" alt="${escapeHtml(item.title)}" class="portfolio-card-thumb" loading="lazy">
          <div class="portfolio-card-overlay">
            <span class="portfolio-card-play">▶</span>
          </div>
        </a>
      </div>

      <div class="portfolio-card-body">
        <div class="portfolio-card-copy">
          <h4 class="portfolio-card-title">${escapeHtml(item.title)}</h4>
          <p class="portfolio-card-category">${escapeHtml(item.category)}</p>
          <p class="portfolio-card-description">${escapeHtml(item.description)}</p>
        </div>

        <div class="portfolio-card-role">
          <span class="portfolio-role-label">Role</span>
          <div class="portfolio-role-badges">${rolesMarkup}</div>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const isDetailPage = document.getElementById('detail-slide') !== null;

  if (isDetailPage) {
    initDetailPage();
  } else {
    initIndexPage();
  }
});

function renderPortfolioGrid(topicKey) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const items = PORTFOLIO_DATA[topicKey] || PORTFOLIO_DATA['short-film'];
  grid.innerHTML = items.map(createPortfolioCardMarkup).join('');
}

function initIndexPage() {
  const tags = document.querySelectorAll('.tag');
  const slideContainer = document.getElementById('main-slide');

  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();

      const targetTag = tag.getAttribute('data-tag');
      const targetUrl = tag.getAttribute('href');

      tag.classList.add(`active-${targetTag}`);

      tags.forEach(t => {
        if (t !== tag) {
          t.style.opacity = '0.3';
          t.style.transform = 'scale(0.95)';
        }
      });

      setTimeout(() => {
        slideContainer.classList.add('page-exit');
      }, 150);

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });
  });
}

function initDetailPage() {
  const slideContainer = document.getElementById('detail-slide');
  const backButton = document.getElementById('back-button');
  const titleEl = document.getElementById('portfolio-section-title');
  const copyEl = document.getElementById('portfolio-section-copy');

  const urlParams = new URLSearchParams(window.location.search);
  const tagParam = urlParams.get('tag') || 'short-film';
  const data = INTEREST_DATA[tagParam] || INTEREST_DATA['short-film'];

  slideContainer.classList.add(data.themeClass);

  if (titleEl) titleEl.textContent = data.titleText;
  if (copyEl) copyEl.textContent = `${data.titleText} 시리즈의 작업들을 카드 형태로 정리했습니다.`;

  renderPortfolioGrid(tagParam);

  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault();

      const targetUrl = backButton.getAttribute('href');
      slideContainer.classList.add('page-exit');

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 400);
    });
  }
}
