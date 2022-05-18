/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const divHead = css`
  position: static;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #f9f5f0;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
`;
const wrapperImage = css`
  margin-left: auto;
  margin-right: auto;

  img {
    height: 16px;
  }
  max-width: 1080px;
  padding-right: 40px;
  padding-left: 40px;
  margin-right: auto;
  margin-left: auto;
`;
const headFontRight = css`
  font-size: 15px;
  line-height: 20px;
  float: right;
  font-weight: 550;
  text-align: left;
  letter-spacing: 0.5px;
  position: relative;
`;

const mainPageOutside = css`
  background-color: #f9f5f0;
`;

const containerMainPage = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding: 80px 40px 120px;
  flex-direction: column;
  position: relative;
  background-color: #f9f5f0;
  align-items: flex-start;
  display: flex;

  .heading {
    width: 90%;
    font-size: 57px;
    line-height: 69px;
    font-weight: 500;
    text-align: left;
    margin-top: 0;
    margin-bottom: 10px;
  }
  p {
    width: 520px;
    font-size: 19px;
    line-height: 33px;
    margin-top: 30px;
    margin-bottom: 35px;
    text-align: left;
    letter-spacing: 0.3px;
  }
  .formdiv {
    margin-bottom: 5px;
    margin: 0 0 15px;
    display: block;
    .form {
      align-items: center;
      display: flex;
      margin-top: 0em;
      justify-content: space-between;
      width: 517px;

      .email {
        width: 320px;
        height: 52px;
        margin-top: 10px;
        margin-right: 10px;
        padding-left: 18px;
        border-radius: 10px;
        font-size: 15px;
        letter-spacing: 0.2px;
        display: block;
        padding: 8px 12px;
        margin-bottom: 10px;
        line-height: 1.42857143;
        color: #333;
        margin: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        word-spacing: normal;
      }
      .requestButton {
        height: 52px;
        padding: 14px 32px;
        border: 2px solid #3170e9;
        border-radius: 10px;
        background-color: #387cff;
        box-shadow: 0 1px 25px 0 rgb(56 124 255 / 40%);
        font-size: 16px;
        font-weight: 500;
        display: inline-block;
        color: #fff;
        line-height: inherit;
        text-decoration: none;
        cursor: pointer;
        font: inherit;
        margin: 0;
        user-select: none;
        white-space: pre;
        align-items: flex-start;
        text-align: center;
        cursor: default;
      }
    }
  }
`;

const check = css`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 0;

  .absolutely {
    margin-right: 10px;
    display: flex;
    align-items: center;

    .image86 {
      height: 18px;
      border: 0;
      vertical-align: middle;
      display: inline-block;
      max-width: 100%;
    }
    .textblock1 {
      margin-left: 10px;
      font-size: 13px;
      letter-spacing: 0.3px;
      display: block;
    }
    .percent {
      display: flex;

      .image87 {
        height: 18px;
        border: 0;
        vertical-align: middle;
        display: inline-block;
        max-width: 100%;
      }
      .textblock2 {
        margin-left: 10px;
        font-size: 13px;
        letter-spacing: 0.3px;
        display: block;
      }
    }
  }
`;

const grill = css`
  right: 60px;
  bottom: -8%;
  height: 280px;
  position: absolute;
  left: auto;
  top: auto;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
`;

const secondPage = css`
  display: block;
  .containerP2 {
    clear: both;
    content: ' ';
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
    max-width: 1080px;
    padding: 180px 40px 160px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    content: ' ';
    display: table;
    .headline2 {
      margin-bottom: 20px;
      font-size: 38px;
      line-height: 50px;
      font-weight: 600;
      text-align: center;
      letter-spacing: 0.2px;
      margin-top: 20px;
    }
    .lineDiv {
      width: 50px;
      height: 2px;
      margin-right: auto;
      margin-bottom: 25px;
      margin-left: auto;
      border-top: 2px dotted;
      display: block;
    }
    .divPictures {
      position: relative;
      display: flex;
      margin-top: 80px;
      margin-bottom: 200px;
      justify-content: space-between;
      .divPicture2 {
        width: 45%;
        display: block;

        .leonaImg {
          border: 0;
          vertical-align: middle;
          display: inline-block;
          max-width: 100%;
        }
        .leonaCpation {
          margin-top: 10px;
          margin-left: 25px;
          color: #000;
          font-size: 13px;
          letter-spacing: 0.1px;
          display: block;
        }
      }
      .divPicture1 {
        width: 45%;
        display: block;
        .juanImg {
          border: 0;
          vertical-align: middle;
          display: inline-block;
          max-width: 100%;
        }
        .juanCaption {
          margin-top: 10px;
          margin-left: 25px;
          color: #000;
          font-size: 13px;
          letter-spacing: 0.1px;
          display: block;
        }
      }
    }
    .layoutGrid {
      grid-column-gap: 37px;
      grid-row-gap: 95px;
      margin-top: 80px;
      margin-bottom: 260px;
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      .grid1 {
        grid-column-start: span 1;
        grid-column-end: span 1;
        grid-row-start: span 1;
        grid-row-end: span 1;
        display: flex;
        align-items: center;
        .gridBlock1 {
          margin-right: 40px;
          padding: 30px;
          border-radius: 20px;
          background-color: #f9f5f0;
          display: block;

          .imgGrid1 {
            width: 40px;
            height: 40px;
            border: 0;
            vertical-align: middle;
            display: inline-block;
            max-width: 100%;
          }
        }

        .gridText1 {
          font-size: 24px;
          line-height: 35px;
          font-weight: 500;
          display: block;

          .gridCaption1 {
            color: #797979;
            font-size: 24px;
            line-height: 35px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
const gap = css`
  width: 30px;
`;

const formdiv1 = css`
  margin-bottom: 5px;
  margin: 0 0 15px;
  display: block;
  align-items: center;
`;
const form1 = css`
  align-items: center;
  display: flex;
  margin: 0 auto;
  margin-top: 0em;

  justify-content: space-between;
  width: 517px;
`;
const email = css`
  width: 320px;
  height: 52px;
  padding-left: 50px;
  margin-top: 10px;
  margin-right: 10px;
  padding-left: 18px;
  border-radius: 10px;
  font-size: 15px;
  letter-spacing: 0.2px;
  display: block;
  padding: 8px 12px;
  margin-bottom: 10px;
  line-height: 1.42857143;
  color: #333;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  word-spacing: normal;
`;

const requestButton = css`
  height: 52px;
  padding: 14px 32px;
  border: 2px solid #3170e9;
  border-radius: 10px;

  background-color: #387cff;
  box-shadow: 0 1px 25px 0 rgb(56 124 255 / 40%);
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  color: #fff;
  line-height: inherit;
  text-decoration: none;

  margin: 0;
  user-select: none;
  white-space: pre;
  align-items: flex-start;
  text-align: center;
`;

const footerSkenario = css`
  display: flex;
  margin-top: 80px;
  margin-bottom: 120px;
  align-items: center;
`;

const quotation = css`
  margin-top: -30px;
  font-family: Coustard, sans-serif;
  font-size: 70px;
`;

const paragraphFooter = css`
  font-size: 20px;
  line-height: 32px;
  margin-left: 25px;
  display: block;
  width: 400px;
`;
const imgSkenario = css`
  width: 280px;
  margin-top: 25px;
  margin-left: 150px;
`;

function Landing() {
  return (
    <div className="Landing">
      <div css={divHead}>
        <div css={wrapperImage}>
          <img
            src="https://assets.website-files.com/600ea824f296c05edccbc9a8/61127bf50328a76baf48f935_rebank_logo.svg"
            loading="lazy"
            alt=""
            className="roast-rebank-logo"
          />
          <div css={headFontRight}>Roast My Finance Stack</div>
        </div>
      </div>

      <div css={mainPageOutside}>
        <div css={containerMainPage}>
          <h1 className="heading">Do finance work with confidence</h1>
          <p>
            Get a personalized video review of your finance stack & expert
            recommendations you wish you'd had sooner
          </p>
          <div className="formdiv">
            <form className="form">
              <input
                type="email"
                className="email"
                name="Email"
                data-name="Email"
                placeholder="Your company email"
                id="Email"
                required=""
              />
              <input
                type="submit"
                value="Request a roast"
                data-wait="Doings things..."
                data-event-category="Roast My Finance Stack"
                data-event-action="Click"
                data-event-label="Request a roast — Hero"
                className="requestButton"
              />
            </form>
          </div>

          <div css={check}>
            <div className="absolutely">
              <img
                src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                loading="lazy"
                alt=""
                className="image86"
              />{' '}
              <div className="textblock1">Absolutely free</div>{' '}
              <div className="percent">
                <div css={gap}> </div>
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                  loading="lazy"
                  alt=""
                  className="image87"
                />
                <div className="textblock2">100% private</div>
              </div>
            </div>
          </div>
          <img
            css={grill}
            src="https://assets.website-files.com/600ea824f296c05edccbc9a8/624302507df35cd0dbd604e0_bbq.svg"
            loading="lazy"
            alt=""
            className="grill"
          />
        </div>
      </div>
      <div css={secondPage}>
        <div className="containerP2">
          <h2 className="headline2">Tailored advice by finance pros</h2>
          <div className="lineDiv">{}</div>
          <div className="divPictures">
            <div className="divPicture1">
              <img
                className="juanImg"
                src="https://assets.website-files.com/600ea824f296c05edccbc9a8/625802676f8ce787b7ed854e_Group%202150.png"
                sizes="(max-width: 479px) 87vw, (max-width: 767px) 72vw, (max-width: 1439px) 41vw, 450px"
                alt="uan"
              />
              <div className="juanCaption">
                Juan, rebank CEO, Y Combinator startup founder
              </div>
            </div>
            <div className="divPicture2">
              <img
                className="leonaImg"
                src="https://assets.website-files.com/600ea824f296c05edccbc9a8/62580267cb33ee824bbab83a_Group%202138.png"
                sizes="(max-width: 479px) 87vw, (max-width: 767px) 72vw, (max-width: 1439px) 41vw, 450px"
                alt=""
              />
              <div className="leonaCpation">
                Leona, rebank CFO, MBA and international accountant
              </div>
            </div>
          </div>
          <h2 className="headline2">Learn how to</h2>
          <div className="lineDiv">{}</div>
          <div className="layoutGrid">
            <div id="grid1" className="grid1">
              <div className="gridBlock1">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/62580fb6db15dd2650e7c907_globe-wire.svg"
                  alt=""
                  className="imgGrid1"
                />
              </div>
              <div className="gridText1">
                Structure your company
                <br />
                <span className="gridCaption1">to sell worldwide</span>
              </div>
            </div>
            <div className="grid1">
              <div className="gridBlock1">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119d129b026e6a035ec7_Money%20Bag.svg"
                  alt=""
                  className="imgGrid1"
                />
              </div>
              <div className="gridText1">
                Avoid transfer fees‍
                <br />
                <span className="gridCaption1">
                  with zero-cost bank accounts
                </span>
              </div>
            </div>
            <div className="grid1">
              <div className="gridBlock1">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119d27e336487b0f7bee_calculator.svg"
                  alt=""
                  className="imgGrid1"
                />
              </div>
              <div className="gridText1">
                Escape hefty tax bills <br />
                <span className="gridCaption1">with the right paperwork</span>
              </div>
            </div>
            <div className="grid1">
              <div className="gridBlock1">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119c2f4fa902f91a0e23_letter.svg"
                  loading="lazy"
                  alt=""
                  className="imgGrid1"
                />
              </div>
              <div className="gridText1">
                Organize your finances
                <br />
                <span className="gridCaption1">
                  with accounting integrations
                </span>
              </div>
            </div>
            <div className="grid1">
              <div className="gridBlock1">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119c21ac257df98dcf14_hat.svg"
                  loading="lazy"
                  alt=""
                  className="imgGrid1"
                />
              </div>
              <div className="gridText1">
                Accelerate your growth
                <br />
                <span className="gridCaption1">with the perfect team</span>
              </div>
            </div>
            <div className="grid1">
              <div className="gridBlock1">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6258119df151e1a304176600_hourglass.svg"
                  loading="lazy"
                  alt=""
                  className="imgGrid1"
                />
              </div>
              <div className="gridText1">
                Save time
                <br />
                <span className="gridCaption1">by automating workflows</span>
              </div>
            </div>
          </div>
          <h2 className="headline2">Recommended by world-class companies</h2>
          <div className="lineDiv">{}</div>

          <div css={footerSkenario}>
            <div css={quotation}>"</div>
            <div css={paragraphFooter}>
              {' '}
              There are so many things to keep track of and it's easy to miss
              things. We had concerns about inter-company transfers. The roast
              touches on some really good points.
            </div>{' '}
            <img css={imgSkenario} src="\skenario1.png" alt="" />
          </div>

          <div css={formdiv1}>
            <form css={form1}>
              <input
                css={email}
                type="email"
                className="email"
                name="Email"
                data-name="Email"
                placeholder="Your company email"
                id="Email"
                required=""
              />
              <input
                css={requestButton}
                type="submit"
                value="Request a roast"
                data-wait="Doings things..."
                data-event-category="Roast My Finance Stack"
                data-event-action="Click"
                data-event-label="Request a roast — Hero"
              />
            </form>
            <div css={check}>
              <div className="absolutely">
                <img
                  src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                  loading="lazy"
                  alt=""
                  className="image86"
                />{' '}
                <div className="textblock1">Absolutely free</div>{' '}
                <div className="percent">
                  <div css={gap}> </div>
                  <img
                    src="https://assets.website-files.com/600ea824f296c05edccbc9a8/6257ebcdc0a86f6b44988acc_tick.svg"
                    loading="lazy"
                    alt=""
                    className="image87"
                  />
                  <div className="textblock2">100% private</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
