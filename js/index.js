// login user
const myUser = {
  name: "bsam",
  username: "x.bsam",
  age: 32,
  gender: "male",
  profession: "optician",
};
localStorage.setItem("user", JSON.stringify(myUser));

const body = document.querySelector("body");
// createElement
const createElement = (el) => {
  const newDiv = document.createElement(el);
  return newDiv;
};
// CreateItem
const CreateItem = (typeElement, className, to, text = "") => {
  var newDiv = createElement(typeElement);
  newDiv.classList = className;
  newDiv.innerHTML = text;
  to.appendChild(newDiv);
  return newDiv;
};
const CreateImg = (className, to, src, alt, w, h) => {
  var newImg = createElement("img");
  newImg.classList = className;
  newImg.setAttribute("src", src);
  newImg.setAttribute("alt", alt);
  newImg.setAttribute("width", w);
  newImg.setAttribute("height", h);
  to.appendChild(newImg);
  return newImg;
};
// CreateMultipleItems
const CreateMultipleItems = (arr, to) => {
  arr.forEach((name) => {
    var newDiv = createElement("div");
    newDiv.classList = name;
    to.appendChild(newDiv);
  });
};
// cloneItem
const cloneItem = (el, to, count, deep = true) => {
  for (let i = 0; i < count; i++) {
    const theClone = el.cloneNode(deep);
    to.appendChild(theClone);
  }
};

// userComponent;
const userComponent = (to) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const newUser = CreateItem("div", "user", to);
  CreateImg("user-img", newUser, "images/default.webp", "default", "40", "40");
  const infoNewUser = CreateItem("div", "info-user", newUser);
  CreateItem("p", "name", infoNewUser, user.name);
  CreateItem("p", "username", infoNewUser, "@" + user.username);
  return newUser;
};
//  createTweet Component
function createTweet(id, text, src) {
  const tweet = createElement("div");
  tweet.classList = "tweet under-line";
  newsFeed.prepend(tweet);
  // CreateItem("div", "");
  tweet.id = id;
  const user = userComponent(tweet);
  CreateItem(
    "div",
    "delete-icon",
    user,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path></g></svg>`
  );
  CreateItem("p", "text-tweet", tweet, text);
  if (src) CreateImg("img-tweet", tweet, src, "img", "300", "300");
  const actionTweet = CreateItem("div", "actions-tweet", tweet);
  CreateItem(
    "span",
    "action reply",
    actionTweet,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>`
  );
  CreateItem(
    "span",
    "action retweet",
    actionTweet,
    `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>`
  );
  CreateItem(
    "span",
    "action like",
    actionTweet,
    `<svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>`
  );
  CreateItem(
    "span",
    "action activity",
    actionTweet,
    `<svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>`
  );
  CreateItem(
    "span",
    "action share",
    actionTweet,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>`
  );
}

// Create the Main
const main = createElement("main");
main.classList.add("main-container");
body.prepend(main);

const leftSideBar = CreateItem("div", "left-sidebar", main);
const contentTweeter = CreateItem("div", "content-tweeter", main);
const mainSideBar = CreateItem("div", "main-sidebar", contentTweeter);
const rightSideBar = CreateItem("div", "right-sidebar", contentTweeter);
//// start create content of rightSideBar
const headerRightSideBar = CreateItem("div", "header", rightSideBar);
CreateItem("div", "search flex-center", headerRightSideBar);
headerRightSideBar.firstChild.innerHTML = `
<svg
viewBox="0 0 24 24"
aria-hidden="true"
class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
>
<g>
<path
                  d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                  ></path>
                  </g>
                  </svg>
            <input type="search" placeholder="Search" class="search-box" />`;

const trendsRightSideBar = CreateItem("div", "trends", rightSideBar);
CreateItem("h1", "heading", trendsRightSideBar, "Trends for you");
const trendsForYouRightSideBar = CreateItem(
  "div",
  "trends-for-you",
  trendsRightSideBar
);
const firstTrend = CreateItem("div", "trend", trendsForYouRightSideBar);
CreateItem("p", "title", firstTrend, "#Palestine");
CreateItem("p", "count-post", firstTrend, "5.670 posts");
cloneItem(firstTrend, trendsForYouRightSideBar, 5);
//// end create content of rightSideBar

//// start create content of leftSideBar

const contentLeftSideBar = CreateItem("div", "content", leftSideBar);
CreateItem(
  "div",
  "logo flex-center",
  contentLeftSideBar,
  `<svg viewBox="0 0 24 24" aria-hidden="true">
<g>
  <path
    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  ></path>
</g>
</svg>`
);
const navLeftSideBar = CreateItem("nav", "", contentLeftSideBar);
navLeftSideBar.innerHTML = `<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Home</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Explore</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Notifications</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#"
  ><svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Messages</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Lists</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Communities</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
      ></path>
    </g>
  </svg>
  <span class="content-link">Profile</span>
</a>
</li>
<li class="nav-link">
<a class="item-link" href="#">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g>
      <path
        d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
      ></path>
    </g>
  </svg>
  <span class="content-link">More</span>
</a>
</li>`;
CreateItem("button", "btn", contentLeftSideBar, "post");

userComponent(contentLeftSideBar);
//// end create content of leftSideBar

//// start create content of mainSideBar

const headerMainSideBar = CreateItem("div", "header under-line", mainSideBar);
const logoMainSideBar = CreateItem("a", "logo", headerMainSideBar, "Home");
logoMainSideBar.setAttribute("href", "index.html");
const partsMainSideBar = CreateItem("div", "parts", headerMainSideBar);
CreateItem(
  "div",
  "active part",
  partsMainSideBar,
  '<span class="part-content">For you</span>'
);
CreateItem(
  "div",
  "part",
  partsMainSideBar,
  '<span class="part-content">Follwing</span>'
);
const postBox = CreateItem("div", "post-box", mainSideBar);
CreateImg("user-post", postBox, "images/default.webp", "default", "40", "40");
const formPostBox = CreateItem("div", "post-form", postBox);
const textArea = createElement("textarea");
textArea.classList = "tweetText";
textArea.setAttribute("placeholder", "What's happening?");
formPostBox.appendChild(textArea);
const boxOutputLoaded = CreateItem("div", "box-output", formPostBox);

const cancelUpload = CreateItem(
  "span",
  "cancel-upload",
  boxOutputLoaded,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>`
);
const imgLoaded = CreateImg(
  "img-loaded",
  boxOutputLoaded,
  "",
  "img",
  "300",
  "300"
);

// create list  actions
const actionFormPostBox = CreateItem("div", "actions", formPostBox);
const listActionFormPostBox = CreateItem(
  "ul",
  "list-action",
  actionFormPostBox
);

const labelUploadImage = CreateItem(
  "label",
  "label-upload action",
  listActionFormPostBox,
  `<svg viewBox="0 0 24 24" aria-hidden="true">
  <g>
    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z">
    </path>
    </g>
    </svg>
`
);

labelUploadImage.setAttribute("for", "btn-upload");

const inputUploadImage = CreateItem("input", "input-upload", labelUploadImage);
inputUploadImage.setAttribute("type", "file");
inputUploadImage.setAttribute("hidden", true);
inputUploadImage.setAttribute("id", "btn-upload");

CreateItem(
  "li",
  "action",
  listActionFormPostBox,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>`
);
CreateItem(
  "li",
  "action",
  listActionFormPostBox,
  `<svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>`
);
CreateItem(
  "li",
  "action",
  listActionFormPostBox,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></g></svg>`
);
CreateItem(
  "li",
  "action",
  listActionFormPostBox,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>`
);

const postBtn = CreateItem("button", "btn post-btn", actionFormPostBox, "post");

// under line
CreateItem("div", "under-line", formPostBox);

// Create tweets box
const newsFeed = CreateItem("div", "news-feed", mainSideBar);

//// end create content of mainSideBar

// start event website

//  imgRender
let imgRender = "";

// btn post event
const checkContent = () => {
  if (textArea.value.length > 0 || inputUploadImage.value.length > 0) {
    postBtn.style.cssText = `
    opacity : 1;
    cursor: pointer;
    `;
  } else {
    postBtn.style.cssText = `
    opacity : .4;
    cursor: default;
    `;
  }
};

postBox.addEventListener("keyup", checkContent);
postBox.addEventListener("click", checkContent);
postBox.addEventListener("change", checkContent);

// load img
function load(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    boxOutputLoaded.style.display = "block";
    imgRender = reader.result;
    imgLoaded.src = imgRender;
  };
  reader.readAsDataURL(file);
}
inputUploadImage.addEventListener("change", load);

// cancel Upload img
cancelUpload.onclick = function () {
  boxOutputLoaded.style.display = "none";
  imgRender = "";
  inputUploadImage.value = "";
  imgLoaded.src = "";
};

const $data = JSON.parse(localStorage.getItem("data")) || [];
// Find the biggest Id
function getBiggestId(arr) {
  let biggestId = arr.reduce((acc, current) => {
    return acc.id > current.id ? acc : current;
  });
  return biggestId.id;
}
let getId = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  if (data && data.length > 0) {
    return getBiggestId(data) + 1;
  } else {
    return 1;
  }
};
let id = getId();

// load all data from localStorage
window.addEventListener("load", (event) => {
  $data.forEach((data) => {
    createTweet(data.id, data.text, data.img);
  });
});

// click postBtn
postBtn.addEventListener("click", function () {
  if (textArea.value.length > 0 || imgRender.length > 0) {
    createTweet(id, textArea.value, imgRender);
    $data.push({
      id: id,
      text: textArea.value,
      img: imgRender,
    });
    id++;
    localStorage.setItem("data", JSON.stringify($data));
    textArea.value = "";
    cancelUpload.click();
  }
});

// delete tweet

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("delete-icon")) {
    let text = "Are you sure you want to delete this tweet !";
    if (confirm(text) == true) {
      const tweet = btn.parentElement.parentElement;
      tweet.remove();
      const tweetId = tweet.getAttribute("id");
      const $data = JSON.parse(localStorage.getItem("data"));
      const new$data = $data.filter((data) => {
        return Number(data.id) !== Number(tweetId);
      });
      localStorage.setItem("data", JSON.stringify(new$data));
    }
  }
});

// run like btn
document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("like")) {
    btn.firstChild.classList.contains("fav")
      ? (btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>`)
      : (btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" fill='red' class='fav'><g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>`);
  }
});
// run like btn
document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("retweet")) {
    const theTweet = btn.parentElement.parentElement;
    const theClone = theTweet.cloneNode(true);
    theClone.id += ".1";
    newsFeed.prepend(theClone);
    const new$data = $data.filter((data) => {
      return data.id == Number(theTweet.id);
    })[0];
    $data.push({ ...new$data, ...{ id: theClone.id } });
    localStorage.setItem("data", JSON.stringify($data));
  }
});
