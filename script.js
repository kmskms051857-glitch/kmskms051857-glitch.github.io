// script.js - Interactive behavior for Apple Keynote Style Profile Card

// 1. Data configuration for interest details
const INTEREST_DATA = {
  'short-film': {
    themeClass: 'theme-short-film',
    badgeText: 'Portfolio',
    titleText: '단편영화',
    descText: '짧지만 강렬한 이야기와 감성을 담은 단편 영상 컬렉션입니다.',
    visualText: '단편영화'
  },
  contest: {
    themeClass: 'theme-contest',
    badgeText: 'Portfolio',
    titleText: '공모전',
    descText: '아이디어와 표현력을 겨루는 공모전 출품 영상들을 소개합니다.',
    visualText: '공모전'
  },
  documentary: {
    themeClass: 'theme-documentary',
    badgeText: 'Portfolio',
    titleText: '다큐멘터리',
    descText: '현실을 담아내는 기록형 영상 프로젝트들을 모았습니다.',
    visualText: '다큐멘터리'
  },
  'other-projects': {
    themeClass: 'theme-other',
    badgeText: 'Portfolio',
    titleText: '기타 프로젝트',
    descText: '다양한 크리에이티브 실험과 협업 프로젝트를 확인해보세요.',
    visualText: '기타 프로젝트'
  }
};

const PORTFOLIO_DATA = {
  'short-film': [
    {
      title: '구교환 & 이옥섭 로미오 : 눈을 가진 죄 (ROMEO, 2019)',
      videoUrl: 'https://youtu.be/UAXaxqroUwo?si=Ccamf6erF1Xkf5kx',
      thumbUrl: 'https://img.youtube.com/vi/UAXaxqroUwo/hqdefault.jpg'
    },
    {
      title: 'Numb (Official Music Video) [4K UPGRADE] – Linkin Park',
      videoUrl: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      thumbUrl: 'https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg'
    },
    {
      title: 'Flexin\' On Ya (2014)',
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      thumbUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg'
    },
    {
      title: 'Metallica: Nothing Else Matters (Official Music Video)',
      videoUrl: 'https://www.youtube.com/watch?v=tAGnKpE4NCI',
      thumbUrl: 'https://img.youtube.com/vi/tAGnKpE4NCI/hqdefault.jpg'
    }
  ],
  contest: [
    {
      title: 'RickRoll\'D',
      videoUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      thumbUrl: 'https://img.youtube.com/vi/oHg5SJYRHA0/hqdefault.jpg'
    },
    {
      title: 'Nice Ocean Waves',
      videoUrl: 'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
      thumbUrl: 'https://img.youtube.com/vi/V-_O7nl0Ii0/hqdefault.jpg'
    },
    {
      title: 'Rick Astley - Never Gonna Give You Up [HQ]',
      videoUrl: 'https://www.youtube.com/watch?v=DLzxrzFCyOs',
      thumbUrl: 'https://img.youtube.com/vi/DLzxrzFCyOs/hqdefault.jpg'
    },
    {
      title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
      videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      thumbUrl: 'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg'
    }
  ],
  documentary: [
    {
      title: 'Smash Mouth - All Star',
      videoUrl: 'https://www.youtube.com/watch?v=L_jWHffIx5E',
      thumbUrl: 'https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg'
    },
    {
      title: 'Imagine Dragons - Radioactive',
      videoUrl: 'https://www.youtube.com/watch?v=ktvTqknDobU',
      thumbUrl: 'https://img.youtube.com/vi/ktvTqknDobU/hqdefault.jpg'
    },
    {
      title: 'Bruno Mars - The Lazy Song (Official Music Video)',
      videoUrl: 'https://www.youtube.com/watch?v=fLexgOxsZu0',
      thumbUrl: 'https://img.youtube.com/vi/fLexgOxsZu0/hqdefault.jpg'
    },
    {
      title: 'Katy Perry - Roar',
      videoUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
      thumbUrl: 'https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg'
    }
  ],
  'other-projects': [
    {
      title: 'Alan Walker - Faded',
      videoUrl: 'https://www.youtube.com/watch?v=60ItHLz5WEA',
      thumbUrl: 'https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg'
    },
    {
      title: 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack',
      videoUrl: 'https://www.youtube.com/watch?v=RgKAFK5djSk',
      thumbUrl: 'https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg'
    },
    {
      title: 'Maroon 5 - Sugar (Official Music Video)',
      videoUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
      thumbUrl: 'https://img.youtube.com/vi/09R8_2nJtjg/hqdefault.jpg'
    },
    {
      title: 'Eminem - Love The Way You Lie ft. Rihanna',
      videoUrl: 'https://www.youtube.com/watch?v=uelHwf8o7_U',
      thumbUrl: 'https://img.youtube.com/vi/uelHwf8o7_U/hqdefault.jpg'
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Determine which page we are currently on
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
  grid.innerHTML = items.map(item => {
    const thumbClass = item.thumbUrl ? '' : ' empty';
    const thumbStyle = item.thumbUrl ? `style="background-image:url('${item.thumbUrl}')"` : '';
    return `
      <div class="portfolio-item">
        <a href="${item.videoUrl}" class="portfolio-thumb${thumbClass}" ${thumbStyle} target="_blank" rel="noopener noreferrer" aria-label="${item.title}"></a>
        <a href="${item.videoUrl}" class="portfolio-title" target="_blank" rel="noopener noreferrer">
          ${item.title}
        </a>
      </div>
    `;
  }).join('');
}

/**
 * Logic for the Main Profile Page (index.html)
 */
function initIndexPage() {
  const tags = document.querySelectorAll('.tag');
  const slideContainer = document.getElementById('main-slide');

  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault(); // Stop instant navigation
      
      const targetTag = tag.getAttribute('data-tag');
      const targetUrl = tag.getAttribute('href');

      // 1. Add active class to animate the clicked tag
      tag.classList.add(`active-${targetTag}`);

      // 2. Fade out other tags and card elements
      tags.forEach(t => {
        if (t !== tag) {
          t.style.opacity = '0.3';
          t.style.transform = 'scale(0.95)';
        }
      });

      // 3. Slide fade exit animation for the main slide
      setTimeout(() => {
        slideContainer.classList.add('page-exit');
      }, 150);

      // 4. Redirect after animation completes
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });
  });
}

/**
 * Logic for the Detailed Interest Page (detail.html)
 */
function initDetailPage() {
  const slideContainer = document.getElementById('detail-slide');
  const backButton = document.getElementById('back-button');
  
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const tagParam = urlParams.get('tag') || 'short-film';
  
  // Retrieve corresponding data
  const data = INTEREST_DATA[tagParam] || INTEREST_DATA['short-film'];

  // 1. Apply theme-specific styles
  slideContainer.classList.add(data.themeClass);

  // 2. Populate elements with dynamic data
  const badgeEl = document.getElementById('interest-badge');
  const titleEl = document.getElementById('interest-title');
  const descEl = document.getElementById('interest-description');
  const visualEl = document.getElementById('interest-visual');

  if (badgeEl) badgeEl.textContent = data.badgeText;
  if (titleEl) titleEl.textContent = data.titleText;
  if (descEl) descEl.textContent = data.descText;
  if (visualEl) visualEl.textContent = data.visualText;

  renderPortfolioGrid(tagParam);

  // 3. Smooth transition for back navigation
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
