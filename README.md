# 현준의 개발 노트 · Chirpy 7.6.0 적용 가이드

DaY.log처럼 왼쪽에 프로필과 메뉴, 가운데에 글 목록, 오른쪽에 최근 글과 인기 태그를 둔 GitHub 블로그입니다. **이 폴더를 열고 설정과 Markdown 글을 바꾸면 같은 디자인으로 시작할 수 있습니다.** `Gemfile`이 Chirpy 7.6.0을 지정하고, 이 폴더에 현준님의 설정과 글이 들어 있습니다. 처음 포함한 글 5편은 편집용 예시입니다.

## 1. 수정할 폴더 열기

이 저장소를 복제해 VS Code 등 편집기에서 엽니다. 소스 ZIP을 받았다면 압축을 푼 뒤 **`Gemfile`, `_config.yml`, `_posts`가 나란히 있는 폴더**를 여세요. 아래 파일 경로는 모두 이 폴더 기준입니다. `_site`는 빌드할 때 다시 생성되는 결과물이고 `_preview`는 미리 만들어 둔 화면입니다. 수정할 곳은 원본 폴더입니다.

## 2. 블로그 이름과 사진 바꾸기

`_config.yml`을 열고 아래에 해당하는 기존 값만 바꾼 뒤 저장하세요. YAML에서 들여쓰기는 공백 두 칸을 사용합니다.

```yaml
title: "현준의 개발 노트"
tagline: "AI 서비스와 개발 기록"
description: "AI 서비스 개발과 데이터 실험을 기록합니다."
lang: en
timezone: Asia/Seoul
theme_mode: light
avatar: /assets/img/avatar.png

github:
  username: hywznn
social:
  name: 최현준
  links:
    - https://github.com/hywznn
```

- `title`과 `tagline`은 왼쪽 프로필의 이름과 한 줄 소개, `social.name`은 글의 기본 작성자입니다. `description`은 검색 결과와 피드 등에 쓰는 사이트 설명입니다.
- 사진은 정사각형 PNG를 `assets/img/avatar.png`에 같은 이름으로 교체하면 됩니다. JPG를 쓴다면 실제 파일 이름과 `avatar` 값의 확장자를 `.jpg`로 맞추세요.
- `lang: en`은 레퍼런스처럼 메뉴와 버튼을 영어로 표시합니다. `ko-KR`로 바꾸면 홈·카테고리·태그·아카이브·정보가 표시됩니다. 글 본문은 어느 쪽이든 한국어로 쓸 수 있습니다. `theme_mode: light`는 밝은 화면을 고정합니다.
- 사이드바 아래 GitHub 아이콘의 계정은 `github.username`, 표시할 연락처 아이콘 목록은 `_data/contact.yml`에서 바꿉니다. 기본값은 GitHub와 RSS입니다.

## 3. 소개와 왼쪽 메뉴 고치기

`_tabs/about.md`에 들어가 두 번째 `---` 아래의 소개, 프로젝트 이름과 링크를 편집하세요. 예를 들어 첫 문단을 `안녕하세요, 최현준입니다. 검색과 추천 시스템을 공부하며 만든 것을 기록합니다.`로 바꾸면 About 페이지에 그대로 표시됩니다.

Home은 테마가 맨 위에 둡니다. 그 아래 메뉴는 `_tabs`의 파일 첫머리에 적힌 `order`가 작은 순서입니다. 지금은 `categories.md`가 1, `tags.md`가 2, `archives.md`가 3, `about.md`가 4입니다. 소개를 Home 다음에 두려면 `about.md`의 `order: 4`를 `order: 0`으로 바꾸세요. 아이콘은 같은 곳의 `icon` 값입니다.

## 4. 글 한 편 추가하기

`_posts/2026-11-24-two-prediction-targets.md`를 같은 폴더에 복사하고 새 파일 이름을 `2026-11-27-first-note.md`로 바꿔 보세요. 파일 이름은 **연-월-일-영문주소.md** 형식입니다. 아래 내용을 붙여 넣고 날짜를 실제 발행일로 바꿉니다.

```markdown
---
title: "첫 검색 실험에서 무엇을 확인할까?"
date: 2026-11-27 09:00:00 +0900
categories: [실험 노트]
tags: [RAG, 검색]
---

도서관 이용 안내에서 같은 뜻의 두 질문이 같은 근거 문단을 찾는지 살펴봅니다.

## 질문을 고른 이유

여기에 본문을 적습니다.
```

이 예시는 `/posts/first-note/`에 생깁니다. 기존 글을 복사했을 때 머리말에 `permalink: /notes/sensor-data-split/`처럼 주소가 남아 있으면 그 줄을 지우거나 `/notes/first-note/`처럼 **새 글에만 쓸 주소**로 바꾸세요. 맨 위에 고정하려면 머리말에 `pin: true`를 한 줄 추가합니다. `description`을 적으면 목록 카드에 쓸 요약을 정할 수 있고, 생략하면 본문 앞부분이 표시됩니다.

홈의 최신 글과 검색·분류·태그·연도별 아카이브는 빌드할 때 생성됩니다. 오른쪽의 **Recently Updated**는 마지막 수정일(기록이 없으면 발행일)을, **Trending Tags**는 각 태그를 사용한 글 수를 기준으로 채워집니다. 이 목록들을 직접 편집할 필요가 없습니다.

## 5. Mac에서 수정 결과 확인하기

편집기에서 위 폴더를 연 상태로 내장 터미널을 엽니다. `ruby -v`와 `bundle -v`를 실행해 설치 상태를 확인하세요. 이 소스에는 Ruby 3.4.x와 Bundler를 권장합니다. Homebrew가 설치된 Mac에서 개발용 Ruby가 필요하면 아래 명령을 실행하세요. 새 터미널을 열 때도 같은 Ruby를 쓰려면 두 번째 줄을 `~/.zshrc`에 저장하면 됩니다. [Homebrew의 Ruby 3.4 패키지](https://formulae.brew.sh/formula/ruby@3.4) · [Jekyll의 Mac 설치 안내](https://jekyllrb.com/docs/installation/macos/)

```sh
brew install ruby@3.4
export PATH="$(brew --prefix ruby@3.4)/bin:$PATH"
ruby -v
bundle -v
```

이제 같은 터미널에서 실행합니다.

```sh
bundle install
bundle exec jekyll serve --livereload
```

브라우저에서 터미널이 출력한 `Server address`를 엽니다. 기본 주소는 `http://127.0.0.1:4000/`이고 `baseurl: "/blog"`를 쓰면 `http://127.0.0.1:4000/blog/`입니다. 글을 저장하면 열린 미리보기 화면이 자동으로 갱신됩니다. `_config.yml`을 바꾼 경우에는 터미널에서 **Control+C**를 누르고 `bundle exec jekyll serve --livereload`를 다시 실행합니다.

## 6. GitHub Pages에 적용하기

이 저장소의 기본 브랜치는 `master`이고 주소는 [hywznn.github.io](https://hywznn.github.io/)입니다. `_config.yml`에는 `url: "https://hywznn.github.io"`와 `baseurl: ""`가 적용되어 있습니다.

**브라우저에서 바로 글을 고칠 수도 있습니다.** 게시한 저장소에서 `_posts`의 글을 열어 연필 아이콘을 누르고 수정한 뒤 **Commit changes**를 선택하세요. 새 파일은 `_posts → Add file → Create new file`에서 만듭니다. 웹에서 고친 뒤 로컬 작업을 이어갈 때는 GitHub Desktop에서 **Fetch origin → Pull origin**으로 최신 변경을 받습니다. [GitHub Pages 배포 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 글 하단에 ‘이 글 편집’ 링크 표시하기

각 글 하단의 **Edit this post**를 누르면 GitHub 편집 화면이 열립니다. 이 저장소에 적용한 설정은 다음과 같습니다.

```yaml
actions:
  edit_post:
    enabled: true
    url: "https://github.com/hywznn/hywznn.github.io/edit/master"
    static_url: false
```

저장소나 브랜치 이름을 바꾸면 이 주소도 함께 바꾸세요. `static_url: false`일 때 테마가 뒤에 `/_posts/파일명.md`를 붙여 해당 글의 편집 화면을 엽니다. `true`는 모든 글을 같은 주소로 연결합니다. 링크를 누르면 GitHub의 기존 저장소 권한에 따라 직접 수정하거나 변경을 제안할 수 있습니다. [Chirpy 7.6.0 편집 링크 구현](https://github.com/cotes2020/jekyll-theme-chirpy/blob/v7.6.0/_includes/post-edit.html)

## 디자인을 더 바꾸고 싶을 때

지금의 화면을 쓰는 데 별도 CSS 파일은 필요 없습니다. 색이나 여백을 직접 바꾸고 싶을 때만 **테마 7.6.0의 원본 SCSS 전체**를 같은 경로인 `assets/css/jekyll-theme-chirpy.scss`로 복사하세요. 맨 위의 두 줄 `---`, 테마 모드 설정, 기본 스타일을 불러오는 두 `@use` 구문을 보존하고 맨 아래 주석 다음에 내 CSS를 추가합니다. 예를 들어 `#sidebar .site-subtitle { font-style: normal !important; }`은 사이드바 한 줄 소개의 기울임을 풉니다. [7.6.0 원본 SCSS](https://raw.githubusercontent.com/cotes2020/jekyll-theme-chirpy/v7.6.0/assets/css/jekyll-theme-chirpy.scss) · [7.6.0 공식 설정 예제](https://github.com/cotes2020/jekyll-theme-chirpy/blob/v7.6.0/_config.yml)
