export default ({
  children,
  background = '#2b2c31',
  url = 'appear.media'
}: {
  children: any
  background?: string
  url?: string
}) => (
  <div className="browser-template">
    <div className="browser-template__top-bar">
      <ul className="browser-template__buttons">
        <li className="browser-template__buttons_item"></li>
        <li className="browser-template__buttons_item"></li>
        <li className="browser-template__buttons_item"></li>
      </ul>

      <div className="browser-template__address">
        <a href={`https://${url}`}>{url}</a>
      </div>

      <ul className="browser-template__controls">
        <li className="browser-template__controls_item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
            />
          </svg>
        </li>
        <li className="browser-template__controls_item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"
            />
          </svg>
        </li>
        <li className="browser-template__controls_item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256.001 8 119.34 8 7.9 119.525 8 256.185 8.1 393.067 119.095 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.353-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.321 0-196-87.662-196-196 0-108.321 87.662-196 196-196 54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486z"
            />
          </svg>
        </li>
      </ul>
    </div>
    <div className="aspect-ratio">{children}</div>
    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .browser-template {
        overflow: hidden;
        background: #2b2c31;
        border-radius: 4px;
        box-shadow: 0px 16px 32px rgba(75, 77, 82, 0.24), 0px 0px 1px rgba(75, 77, 82, 0.48);
      }
      .browser-template__top-bar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px;
        background: #202124;
      }
      .browser-template__buttons {
        display: flex;
      }
      .browser-template__buttons_item {
        width: 10px;
        height: 10px;
        margin-left: 5px;
        border-radius: 100px;
        background: #c5c5c5;
      }
      .browser-template__buttons_item:nth-child(1) {
        margin-left: 0;
        background: #ff796f;
      }
      .browser-template__buttons_item:nth-child(2) {
        background: #ffd171;
      }

      .browser-template__buttons_item:nth-child(3) {
        background: #64c255;
      }
      .browser-template__address {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        height: 24px;
        border-radius: 24px;
        padding: 6px 16px;
        margin: 0 16px;
        background: #2b2c31;
        font-size: 10px;
      }

      .browser-template__address a {
        font-size: 10px;
        letter-spacing: 0.005rem;
        font-family: sans-serif;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.67);
        text-decoration: none;
      }

      .browser-template__controls {
        display: flex;
        height: 24px;
        align-items: center;
        justify-content: space-around;
      }
      .browser-template__controls_item {
        width: 12px;
        height: 12px;
        color: #b8b8b8;
        margin-top: -4px;
        margin-left: 8px;
      }

      .browser-template__controls_item svg {
        width: 10px;
      }
      .browser-template__controls_item:first-child {
        margin-left: 0;
      }
      .aspect-ratio {
        padding-top: 56.25%;
        width: 100%;
        position: relative;
      }
      .aspect-ratio :global(*) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    `}</style>
  </div>
)
