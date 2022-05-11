# hahow-recruitment-project
Hahow 的徵才作業🐸🐸🐸

## 🐸 Quick Start
1. clone this repository
2. 在根目錄中執行 `yarn install` 下載套件
3. 確定 `localhost:3000` 是可以用的
4. 執行程式： `yarn start` 
5. 執行測試： `yarn test`

## 🐸 Architecture
專案使用 [Create React App](https://github.com/facebook/create-react-app) 建成
```bash
.
├── src/
│  ├── components/            # 元件
│  │  ├── atoms
│  │  │  └── Button/  
│  │  │     └── __test__/     # test files
│  │  │     └── index.tsx     
│  │  └── molecules/ 
│  ├── assets/                # images
│  ├── pages/                 # 存放與 route 相對應的頁面
│  ├── recoil/                # recoil 
│  │  └── hero.ts             # 存放 hero 相關的狀態及 hook
│  ├── route/                 # routes
│  ├── types/                 # typescript declarations
│  ├── stitches.config.ts     # stitches config
│  ├── globalStyle.ts         # global css config
│  ├── App.tsx                
│  └── index.tsx
├── package.json
├── README.md
└── yarn.lock
```
### components
元件的劃分使用[Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)  
分為`atoms`, `molecules`, `organisms` （這次沒有用到 `organisms`）
每個資料夾為一個元件，以`Button`為例，底下會有元件`index.tsx`及存放測試檔案的`__test__`   

### recoil
專案使用 recoil 作為狀態管理工具  
以`hero.ts`為例，檔案中含有英雄相關的儲存資料及相關的 custom hook

## 🐸 Third-Party Libraries
### Framework
- React: 應該是最熱門的前端框架，生態系也很豐富。component based 的特性讓 React 在製作可複用的 UI 元件上很便利。
- React-Router: React 的 Routing Framework ，提供如 `useParam`, `useLocation` 等 hooks 使開發者更方便取得路徑的資料。跟之前使用過的 `universal-router` 比起來，React-Router 使用跟 React 一樣的宣告式寫法：撰寫 component 來定義 routing 的內容。覺得寫起來方便很多！但還在研究有沒有辦法拆分檔案（目前全部都寫在 `route/index.ts` 中）。
### 專案使用 CRA 建立，已經先預設裝好很多很多東西，以下是常見的：
- babel: 能將 ES6+ 的語法轉為所設定的瀏覽器環境能讀懂的語法，也支援 react 語法轉換
- webpack：可以寫很多 config 去打包 JavaScript 檔案的工具
- eslint：檢查 coding style 的工具
- jest：Facebook 推出的 JS 測試工具，搭配 `testing-library/react` 讓測試 React component 更加容易

之前嘗試建立過自己的[typescript-webpack模板](https://github.com/jyun1desu/typescript-webpack-template-practice)，寫完之後就覺得沒有特別要做什麼設定， CRA 應該是很讚的選擇（畢竟是厲害的人寫的🦕）
### 狀態管理工具 跟 CSS-in-JS 套件：
- 📘 [Recoil](https://recoiljs.org/)  
Facebook 推出的狀態管理工具，之前寫過[相關筆記](https://jyun1desu.github.io/2021/07/28/recoil/)。  
自己最喜歡的兩個優點：
  - 非同步的 atom / selector 能與 React.Suspense 直接搭配使用，不用再自己做 loading 的邏輯
  - 比起 redux 少了很多 boilerplate code，使用起來很直觀
- 📗 [stitches](https://stitches.dev/)  
CSS-in-JS 工具，跟 `styled-component` 的使用方式很像
  - [`Variants`](https://stitches.dev/docs/variants) 讓不同樣式能避免屬性覆蓋的問題、也讓 css 更好閱讀
  - [`Utils`](https://stitches.dev/docs/utils) 可以傳入值快速輸出對應的 css
  - 設定全域的顏色、距離數值等 token，甚至 breakpoint 都很快速！  
  - 雖然不像 `styled-components` 能傳入 `props` ，但可以先定義好 `Variants` 或對元件傳入 `css`

## 🐸 Comment
若遇到程式碼較複雜、瑣碎時，比如不容易透過命名看出 code 在做什麼的時候會寫註解。

## 🐸 Issue
- 儲存英雄的資料時，response 回來後會出現 `Uncaught (in promise) SyntaxError: Unexpected token O in JSON at position 0`。找了一下才發現是因為回來的 content-type 是  `text` 而不是 `json` 。暫時先用簡單的方法區分回來是 `json` 還是 `text`
- recoil 的 selector 收到 `heroProfile` 之後要怎麼讓使用者更新數值，一開始搞錯了 selector 的 set 用法（以為是可以 set 在自己身上，原來只能 set 其他 atom）。最後把 selector 當成 fetch 的工具，當 heroId 改變時就打 API 拿英雄的資料，再將資料傳給另一個 atom `heroProfileEditState`。使用者進行的操作只會 update `heroProfileEditState`。覺得這樣整體資料的互動好像正常一點。
