### [사이트 레이아웃 클론 과제]
---
>제출 일자 : 23년 4월 5일   
작성자 : 김다슬

<br>

### 필수 요구사항
---
- [x]  과제에 대한 설명을 포함한 `README.md` 파일을 제공하세요!
 
  -과제에 대한 자세한 설명은 README.md 파일에 작성했습니다. 

<br>

- [x]  과제 결과와 비교할 수 있는 실제 사이트(페이지)의 주소를 명시하세요!  

  -원본 사이트 : [어프어프](https://earpearp.com/index.html)  
  -과제 제출은 4월 5일에 했는데 4월 7일 이후 원본 사이트가 전체 개편 되었습니다. 제출한 과제와 전혀 다른 사이트가 되어 비교할 수 없게 되었습니다. 참고 부탁드립니다.

<br>

- [x]  과정에서 사용한 프로젝트 폴더/파일이 모두 포함돼야 합니다, 일부 파일만 제출하지 마세요!

<br>

- [x]  실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.  
        - 클론 사이트 : [클론](https://beautiful-sunflower-e9dfb0.netlify.app/)

<br>

### 선택 요구사항
---
- [x]  `<header>`, `<section>` 등 시멘틱 태그를 최대한 활용해보세요.  

    -원본 사이트에서 div로 구현된 상단 메뉴 부분과 메인 컨텐츠 부분을 `<header>` 태그와 `<section>` 태그로 구현했습니다.   
    -**(추가사항)** 4월 9일 4조 피어리뷰 이후 리뷰 의견을 반영해 `<aside>` 태그와 `<main>`태그를 추가해 HTML구조를 조금 변경 해 보았습니다.  
        
<br>

- [ ]  실제 사이트의 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요. 

    -flex와 grid에 능숙하지 않아 아직 활용하지 않고 원본 사이트에 적용된 스타일과 동일하게 구현했습니다.  

<br>

- [ ]  부분적으로 BEM 방법론을 도입해보세요.  

    -scss를 처음 사용해 보았기 때문에 BEM 방법론은 도입하지 못했습니다. 

<br>

- [ ]  JS가 필요한 부분은 되도록 생략하되 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)

<br>

- [X]  JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)  

    (1)클릭이 필요한 버튼들의 이벤트는 JS 로 구현했습니다.  
      - 퀵메뉴의 전체 메뉴 열기, 검색창 열기   
      - 우측 고정 버튼의 화면 상단으로 이동하기     
    (2)메인 컨텐츠의 슬라이드를 구현하기 위해 swiper.js 를 사용했습니다.   
        
<br>

- [X]  SCSS 등의 CSS 전처리도구를 도입해보세요. 

    -처음이고, 잘 모르지만 해 보고 싶어서 일단 SCSS를 도입해 보았습니다. 

<br>

- [x]  SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

    -본 과제에는 Parcel 번들러를 활용해 보았습니다. 

<br>

### :one: 원본 사이트 
---

### [어프어프](https://earpearp.com/index.html)

![image](/screenshots/earpearp_full.png)

과제 제출은 4월 5일에 했는데 4월 7일 이후 원본 사이트가 전체 개편 되었습니다.   
제출한 과제와 전혀 다른 사이트가 되어 비교할 수 없게 되었습니다. 참고 부탁드립니다.

<br>

### :two: 클론 사이트 
---
### [클론](https://beautiful-sunflower-e9dfb0.netlify.app/)

<br>

### :three: 사이트 선정 이유
---
어프어프는 'Object through different angle.' 이라는 슬로건을 목적으로 일상 속 사물을 다른 관점으로 바라볼 때 발생하는 다양한 시각들을 표현하고자 하는 휴대폰 케이스, 디지털 액세서리, 소품 등을 판매하는 브랜드입니다. 

평소에도 해당 브랜드를 좋아하며 사이트를 가끔 방문하는데 늘 사이트 디자인이 예쁘다고 생각했었습니다. 강의를 들으며 배운 것을 활용할 수 있을 것 같았고, 직접 만든다면 이런 느낌의 사이트를 만들어 보고 싶었기 때문에 선정하게 되었습니다. 

<br>

### :four: 구현한 부분
---
1. 상단 메뉴  
-원본 사이트의 `display: table` 구조를 그대로 사용해 구현했습니다.  
-마우스를 올리면 밑줄이 생기는 유틸 메뉴를 구현했습니다.    
-메뉴에 마우스를 올리면 색상이 바뀌고, 화살표 방향이 바뀌고,
하위 메뉴가 나타나도록 css로 구현했습니다. 
![image](/screenshots/header.png)  

2. 왼쪽 고정된 퀵 메뉴  
-첫 번째 전체 메뉴 버튼을 클릭하면 전체 메뉴가 왼쪽에서 나타나고, 닫기 버튼을 누르면 다시 왼쪽으로 사라지도록 구현했습니다.   
![image](/screenshots/total.png)  
-두 번째 검색 메뉴 버튼을 클릭하면 입력할 수 있는 검색창이 나타나고,  
다시 버튼을 누르면 사라지도록 구현했습니다.
![image](/screenshots/quick_btns_search.png)
 

3. 슬라이드   
-사이트 중앙의 슬라이드 부분을 swiper.js로 구현했습니다.  
-pagination 부분의 색상과 모양을 원본 사이트와 동일하게 구현했습니다.  
![image](/screenshots/slide.png)    

4. 화면에 고정된 버튼   
-클릭하면 화면의 제일 상단으로 이동할 수 있는 scroll up 버튼을 구현했습니다.  
-화면 우측 하단에 고정된 문의하기 버튼을 구현했습니다.  
![image](/screenshots/fixed.png)  

5. 상품 목록  
-상품 목록을 원본 사이트 레이아웃과 동일하게 구현했습니다.  
![image](/screenshots/product.png)  

6. footer  
-원본 사이트의 `display: table` 구조를 그대로 사용해 구현했습니다. 
![image](/screenshots/footer.png)

<br>

### :five: 아쉬운 부분
---
1. scss를 처음 해봐서 scss의 장점을 100% 활용하지 못한 것 같아 아쉽습니다.  
-처음이고 똑같은 구조로 만들려다 보니 너무 깊은 중첩을 하게 된 것 같습니다.  
-SCSS에서의 BEM 방법론을 도입하려고 했지만 알 수 없는 오류+이해+시간부족으로 일단은 도입하지 않았습니다. 
      <details>
      <summary>시도했던 구조 예시(이후 해볼 예정)</summary>

      ```html
      <nav class="nav">
        <ul class="nav__menu">
          <li class="nav__item">
            <a class="nav__link"></a>
          </li>
          <li class="nav__item nav--active">
            <a class="nav__link"></a>
          </li>
        </ul>
      </nav>
      ```
      ```css
      .nav {
        ...
        &__menu {
          ...
        }
        &__item {
          ...
        }
        &__link {
          ...
        }
        &--active {
          ...
        }
      }
      ```
      </details>    

2. 원본 사이트와 1px 도 흔들리지 않게 똑같이 구현 하기 위해 왜 들어가 있는지 모르겠는 중간중간 들어가 있는 &nbsp 도 어쩔 수 없이 작성하게 되었습니다.  
3. flex와 grid가 익숙하지 않아 우선은 원본 사이트의 처음 접하게 된 display:table 구조로 그대로 구현했는데 flex나 grid 로도 구현해 보면 좋을 것 같습니다.
4. 원본 사이트는 반응형으로 구현되어 비율을 줄이거나 늘이면 설정된 값으로 변하는데 반응형에 대한 이해가 부족해 클론 한 사이트는 고정 너비 1500px 로 구현했습니다.  
5. 원본 사이트의 퀵 메뉴 search 버튼이 `<input type="image">`로 만들어져 있어 똑같은 구조로 만들어봤지만 버튼 이미지가 나타나지 않는 문제가 생겨 다른 방법으로 대체하게 되었습니다.  

<br>

### :six: 피어리뷰 이후 수정 사항
---

4월 9일 4조에서 진행한 피어리뷰 후  
 1.`<aside>` 태그도 활용하면 좋을것 같다는 의견과 전체적으로 묶으면 좋을 것 같다는 의견을 반영하여 `<aside>`태그와 `<main>` 태그를 활용해 HTML 구조를 수정 했습니다.   
 2.원활한 리뷰를 위해 주석을 상세히 작성하자는 의견을 반영하여 주석을 좀더 구체적으로 작성 했습니다. 

 <br>

index.html 파일을 기존의 구조에서

```html
<body>
  <header>...</header> <!--전체메뉴 -->

  <ul>...</ul> <!--고정된 좌측  버튼 : 전체메뉴, 검색, 페이스북, 인스타그램 -->

  <div>...</div> <!--고정된 좌측 메뉴 버튼누르면 나타나는 전체 메뉴 -->

  <div>...</div> <!--고정된 우측 버튼 : 스크롤 상단 이동 버튼 -->

  <div>...</div> <!--고정된 우측 버튼 : 카카오톡 채널 상담 연결 버튼 -->

  <section>...</section> <!--메인 컨텐츠 : 슬라이드 & 상품목록 -->

  <footer>...</footer> <!--푸터 -->
</body>
```

<br>

아래 구조로 변경 했습니다. 

```html
<body>
  <header>...</header> <!--전체메뉴 -->

  <main> 
    <section>...</section> <!--메인 컨텐츠: 슬라이드 & 상품목록 -->
    <aside>...</aside> <!--고정된 좌측  버튼: 전체메뉴, 검색, 페이스북, 인스타그램 -->
    <div>...</div> <!--고정된 좌측 메뉴의 전체 메뉴 버튼누르면 나타나는 전체 메뉴 -->
    <aside>...</aside> <!-- 고정된 우측 버튼: 스크롤 상단 이동 버튼 & 카카오톡 채널 상담 버튼-->
  </main>

  <footer>...</footer> <!--푸터 -->
</body>
```


<br>

### :seven: 멘토리뷰 이후 수정 사항
---

멘토 리뷰 후  
 1.그룹 피어리뷰 후 수정했던 고정된 좌측 퀵 메뉴는 `<aside>` 태그가 아닌 네비게이션 부분인것 같다고 하셔서 `<nav>` 태그로 수정했습니다.   

 <br>

index.html 파일을 기존의 구조에서

```html
<body>
  <header>...</header> <!--전체메뉴 -->

  <main> 
    <section>...</section> <!--메인 컨텐츠: 슬라이드 & 상품목록 -->
    <aside>...</aside> <!--고정된 좌측  버튼: 전체메뉴, 검색, 페이스북, 인스타그램 -->
    <div>...</div> <!--고정된 좌측 메뉴의 전체 메뉴 버튼누르면 나타나는 전체 메뉴 -->
    <aside>...</aside> <!-- 고정된 우측 버튼: 스크롤 상단 이동 버튼 & 카카오톡 채널 상담 버튼-->
  </main>

  <footer>...</footer> <!--푸터 -->
</body>
```

<br>

아래 구조로 변경 했습니다. 

```html
<body>
  <header>...</header> <!--전체메뉴 -->

  <main> 
    <section>...</section> <!--메인 컨텐츠: 슬라이드 & 상품목록 -->
    <nav>...</nav> <!--고정된 좌측  버튼: 전체메뉴, 검색, 페이스북, 인스타그램 -->
    <div>...</div> <!--고정된 좌측 메뉴의 전체 메뉴 버튼누르면 나타나는 전체 메뉴 -->
    <aside>...</aside> <!-- 고정된 우측 버튼: 스크롤 상단 이동 버튼 & 카카오톡 채널 상담 버튼-->
  </main>

  <footer>...</footer> <!--푸터 -->
</body>
```

<br>

2.main.js 에서 퀵 메뉴의 전체 메뉴 보기를 눌렀을 때 메뉴가 나타나는 부분에 동적으로 값이 변하는 것이 아니면 클래스를 추가했다 제거하는 방식으로 구현하는 것이 좋을 것 같다고 하셔서 js 에서 스타일을 변하게 하는 것이 아닌 클래스 추가 제거로 수정했습니다.

<br>

main.js의 기존 코드에서 

```javascript
const totalMenuButton = document.querySelector('.btn-total-menu')
const totalMenuCloseButton = document.querySelector('.btn-menu-close')
const totalMenu = document.querySelector('.total-menu')
const body = document.querySelector('body') 


totalMenuButton.addEventListener('click', function () {
  totalMenu.style.transform = 'translateX(0%)'
  totalMenu.style.opacity = '1'
  body.style.overflow = 'hidden'
})

totalMenuCloseButton.addEventListener('click', function () {
  totalMenu.style.transform = 'translateX(-100%)'
  totalMenu.style.opacity = '0'
  body.style.overflow = 'auto'
})
```

<br>

해당 코드로 변경했습니다.

```javascript 
const totalMenuButton = document.querySelector('.btn-total-menu')
const totalMenuCloseButton = document.querySelector('.btn-menu-close')
const totalMenu = document.querySelector('.total-menu')
const body = document.querySelector('body') 

totalMenuButton.addEventListener('click', function () {
  totalMenu.classList.add('open')
  body.classList.add('scroll-hidden')
})

totalMenuCloseButton.addEventListener('click', function () {
  totalMenu.classList.remove('open')
  body.classList.remove('scroll-hidden')
})
```