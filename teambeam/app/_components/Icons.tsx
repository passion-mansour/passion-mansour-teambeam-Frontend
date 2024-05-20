"use client";

// logo
export const Logo = ({ size }: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 472 155"
      fill="none"
    >
      <path
        d="M112.891 154.785H34.3214C23.3857 154.785 19.0114 150.756 19.0114 139.844V109.793C19.0114 98.8808 23.3857 95.0195 34.3214 95.0195H112.891C123.826 95.0195 128.032 98.8808 128.032 109.793V139.844C128.032 150.756 123.826 154.785 112.891 154.785ZM99.4312 115.165H47.6126C46.6031 115.165 45.9301 115.837 45.9301 116.844V132.96C45.9301 133.968 46.6031 134.639 47.6126 134.639H99.4312C100.441 134.639 101.114 133.968 101.114 132.96V116.844C101.114 115.837 100.441 115.165 99.4312 115.165Z"
        fill="#242424"
      />
      <path
        d="M15.4256 84.6126H28.1686C46.1093 84.6126 63.547 83.941 80.4817 81.255C86.5178 80.2477 90.5419 76.2186 89.7035 69.8391C88.8652 63.4597 84.1704 60.9415 78.1343 61.613C64.3853 63.1239 50.301 64.4669 36.5521 64.4669H24.9828C23.4738 64.4669 22.9708 64.1312 22.9708 62.2845V53.3868H66.2297C72.6012 53.3868 76.2899 50.1971 76.2899 43.6498C76.2899 37.1025 72.7688 33.9128 66.2297 33.9128H22.9708V25.183C22.9708 23.8399 23.1385 23.1684 24.9828 23.1684H67.5711C74.1102 23.1684 77.9666 19.6429 77.9666 13.0956C77.9666 6.54829 74.1102 3.0228 67.5711 3.0228H15.4256C4.52709 3.0228 0 7.55557 0 18.4678V69.3355C0 80.2477 4.52709 84.6126 15.4256 84.6126Z"
        fill="#242424"
      />
      <path
        d="M99.3685 12.0343V68.2248C99.3685 75.9729 104.886 80.2591 112.745 80.2591C120.604 80.2591 126.122 75.9729 126.122 68.2248V12.0343C126.122 4.28617 120.604 -2.28882e-05 112.745 -2.28882e-05C104.886 -2.28882e-05 99.3685 4.28617 99.3685 12.0343Z"
        fill="#242424"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M268.217 65.5496C271.065 71.2051 268.79 78.0988 263.134 80.9471C190.258 117.649 127.741 96.6864 104.22 80.0717C99.0479 76.4182 97.8168 69.2638 101.47 64.0917C105.124 58.9197 112.278 57.6886 117.45 61.3421C134.758 73.5681 188.257 92.9819 252.82 60.4666C258.475 57.6184 265.369 59.8941 268.217 65.5496Z"
        fill="#FFC300"
      />
      <path
        d="M327.358 28.4308V11.9968C327.358 4.27283 332.756 -2.28882e-05 340.445 -2.28882e-05C348.133 -2.28882e-05 353.531 4.27283 353.531 11.9968V57.5152C353.531 65.2392 348.133 69.5121 340.445 69.5121C332.756 69.5121 327.358 65.2392 327.358 57.5152V50.2881H307.013V62.1206C307.013 72.8027 302.597 77.0755 291.964 77.0755H244.525C233.892 77.0755 229.312 72.8027 229.312 62.1206V14.4619C229.312 6.73793 233.892 2.62943 241.581 2.62943C249.269 2.62943 253.849 6.73793 253.849 14.4619V23.3363H282.803V14.4619C282.803 6.73793 287.22 2.62943 294.908 2.62943C302.596 2.62943 307.013 6.73793 307.013 14.4619V28.4308H327.358ZM301.942 88.0863C333.513 88.0863 355.433 98.4398 355.433 121.119C355.433 143.798 333.513 154.151 301.942 154.151C270.371 154.151 248.451 143.798 248.451 121.119C248.451 98.4398 270.371 88.0863 301.942 88.0863ZM301.942 134.102C317.482 134.102 329.26 130.486 329.26 121.119C329.26 111.751 317.482 108.136 301.942 108.136C286.402 108.136 274.624 111.751 274.624 121.119C274.624 130.486 286.402 134.102 301.942 134.102ZM253.849 42.0711V56.533C253.849 57.6834 254.34 58.3407 255.485 58.3407H281.167C282.312 58.3407 282.803 57.6834 282.803 56.533V42.0711H253.849Z"
        fill="#242424"
      />
      <path
        d="M388.154 132.294H445.521C452.343 132.294 456.567 134.923 456.567 141.826C456.567 148.728 452.343 151.357 445.521 151.357H376.783C366.223 151.357 362.649 148.07 362.649 137.388V119.968C362.649 109.286 366.223 106.164 376.783 106.164H427.813C428.626 106.164 428.951 105.835 428.951 105.013V99.9188C428.951 99.0971 428.626 98.7684 427.813 98.7684H392.237H373.858C367.36 98.7684 362.649 96.139 362.649 89.5654C362.649 82.9918 367.36 80.3623 373.858 80.3623H439.347C449.907 80.3623 453.318 83.6491 453.318 94.3312V110.601C453.318 121.283 449.907 124.57 439.347 124.57H388.154C387.342 124.57 387.017 124.899 387.017 125.72V131.143C387.017 131.965 387.342 132.294 388.154 132.294ZM424.889 19.7208H371.021C363.711 19.7208 359.162 17.2557 359.162 9.86039C359.162 2.46508 363.711 -2.28882e-05 371.021 -2.28882e-05H436.911C447.957 -2.28882e-05 452.506 5.09451 452.506 13.9689V24.4867C452.506 34.3471 451.369 43.2214 449.582 51.2741H460.141C467.451 51.2741 472 53.5749 472 60.9702C472 68.3655 467.451 70.6663 460.141 70.6663H338.628C331.318 70.6663 326.769 68.3655 326.769 60.9702C326.77 47.2956 325.252 50.622 338.628 50.622L425.702 51.2741C427.001 44.0431 427.813 36.4835 427.813 28.7595V22.3502C427.813 20.0495 427.326 19.7208 424.889 19.7208Z"
        fill="#FFC300"
      />
      <rect
        x="152.874"
        y="17.1985"
        width="15.2875"
        height="38.2186"
        rx="7.64373"
        fill="#FFC300"
      />
      <rect
        x="191.093"
        y="17.1985"
        width="15.2875"
        height="38.2186"
        rx="7.64373"
        fill="#FFC300"
      />
      <rect
        x="160.96"
        y="74.5272"
        width="27.6439"
        height="53.7357"
        rx="13.822"
        transform="rotate(19.1647 160.96 74.5272)"
        fill="#FFC300"
      />
    </svg>
  );
};

// Home
export const HomeIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 576 512">
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
    </svg>
  );
};

// Calendar
export const CalendarIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 448 512">
      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
    </svg>
  );
};

// Memo
export const MemoIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 448 512">
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z" />
    </svg>
  );
};

// Bookmark
export const BookmarkIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 384 512">
      <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
    </svg>
  );
};

// Todo
export const TodoIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 512 512">
      <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
    </svg>
  );
};

// Board
export const BoardIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 384 512">
      <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />
    </svg>
  );
};

// Comment
export const CommentIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 512 512">
      <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg>
  );
};

// Setting
export const SettingIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 512 512">
      <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </svg>
  );
};

// Bell
export const BellIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 448 512">
      <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
    </svg>
  );
};

// LeftBtn
export const LeftBtnIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 512 512">
      <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
    </svg>
  );
};

// ToggleDownBtn
export const ToggleDownBtnIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 512 512">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
};

// ToggleUpBtn
export const ToggleUpBtnIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 512 512">
      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  );
};

// PlusBtn
export const PlusBtnIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 448 512">
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
};

// HamburgerBtn
export const HamburgerIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

// EllipsisBtn
export const EllipsisBtn = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 128 512">
      <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
    </svg>
  );
};
