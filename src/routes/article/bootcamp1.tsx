import ArticleTitle from "~/components/ArticleTitle";
import {
  Section,
  Example,
  NoBreak,
  CustomBlock,
  Pause,
} from "~/components/Wrappers";
import { CenterDisplay, CentralItalicDisplay } from "~/components/Delimiters";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises } from "~/components/Exercises";
import Solution from "~/components/Solution";
import Table from "~/components/Table";
import Grid from "~/components/Grid";
import { List, Item } from "~/components/List";
import { SectionDivider, StarDivider } from "~/components/SectionDivider";
import VerticalChunk from "~/components/VerticalChunk";

const Bootcamp1 = (props: any) => {
  return (
    <>
      <ArticleTitle label={`Bootcamp 1: ` + props.title} />
      {props.children}
    </>
  );
};

const Article = () => {
  return (
    <>
      {" "}
      <Bootcamp1 title="Sets">
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Notation.`}</b>
            {`
Curly braces typically denote the beginning
“`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 500 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` and ending “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 500 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` of a collection of 
elements, otherwise known as a `}
            <i>{`set`}</i>
            {`.
For example, this is a set containing the 
numbers `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.554ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -665 500 687"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` (and nothing else):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.042ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 4880.6 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-33"
                  d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(2389.3,0)">
                      <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2889.3,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`Also,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="4.887ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 2160 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a set containing just the number `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.965ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 3520.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-33"
                  d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a set containing just the numbers `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` 
and `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.554ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -665 500 687"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` etc. Even,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="3.258ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 1440 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is an `}
            <i>{`empty`}</i>
            {` set, a set with no elements! `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`What it does.`}</b>
            {`
The “API” (a computer science notion,
roughly meaning`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the interface offered to the outside world`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`as in, for example, the buttons and clock 
display and door handle of a microwave oven) 
of a set consists of just one functionality: 
a set can answer questions of the form`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain ... ?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`and nothing else.
For example, you could ask a set`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 3?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`to which `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` would answer “yes”, but
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.394ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 1500 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` would answer “no”, or`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 2?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`to which `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.394ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 1500 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` would
both answer “no”, but `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.668ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 3389.3 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(2389.3,0)">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(2889.3,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` would
answer “yes”.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{`Notation-wise, the expression`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.13ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="8.29ex"
              height="2.463ex"
              role="img"
              focusable="false"
              viewBox="0 -1031 3664.2 1088.6"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(849.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1794.6,0)">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`means`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` contains `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`or `}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` answers “yes” to the
question “do you contain `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`?”`}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`equivalently. [One can also say`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`or `}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`or `}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is an element of `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`depending on one's mood and/or tastes.]
As in all of mathematics, any such statement 
evaluates to either “true” or “false”.
For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="13.576ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 6000.8 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mn">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(777.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1722.6,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(2222.6,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2722.6,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(3167.2,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3667.2,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is true, because `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` `}
            <i>{`is`}</i>
            {` an element of the set 
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` whereas`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="13.576ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 6000.8 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-33"
                  d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mn">
                      <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(777.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1722.6,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(2222.6,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2722.6,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(3167.2,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3667.2,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is false, because `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.554ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -665 500 687"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` `}
            <i>{`is not`}</i>
            {` 
an element of the set `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.`}
            </NoBreak>
            {` `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Set Equality.`}</b>
            {`
Two sets are deemed to be 
equal if and only if they
answer the same to
all “do you contain ...?” questions.
For example, while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.965ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 3520.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`might look superficially different from`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.965ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 3520.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`these sets are actually one and the same, because they both
answer “yes” to`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 1?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
`}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 2?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`and answer “no” to all else. For that matter,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.042ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 4880.6 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(2389.3,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2889.3,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`might also look superficially different from`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.965ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 3520.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`but since both sets answer “yes” to`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 1?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
`}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 2?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`and answer “no” to all else,
they are by definition the same.`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`(These examples demonstrate that human notation 
is redundant: there are several different ways of 
writing down the same set. They also demonstrate
that sets do not keep track of the`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`order`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`nor of the`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`multiplicity`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`of their elements. Such notions are simply not part
of the “API” of a set.)`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`Moreover, any empty set is equal to any other 
empty set. Equality follows because both sets 
answer all questions the same way: they both 
answer “no” to everything. So there is`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`one`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`and only one empty set. Therefore, mathematicians speak of`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`empty set—the one and only!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Second notation for the empty set.`}</b>
            {` 
While the empty set can be written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="3.258ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 1440 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`another available notation is`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.668ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="1.942ex"
              height="2.929ex"
              role="img"
              focusable="false"
              viewBox="0 -999.4 858.2 1294.6"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D719"
                  d="M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D719" xlink:href="#MJX-1-TEX-I-1D719"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`which is the Greek letter phi, read “fee”. (Or “fie”?
Hum.) (Or you can just say “the empty set”, and
keep it safe.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sets within sets.`}</b>
            {`
Sets can be nested much like Russian dolls.
In fact, the result of doing this might even look like a little bit
like a Russian doll (no?):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="13.032ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 5760 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1500,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2000,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3000,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`The above is “a set containing a set containing a set
containing a set containing the empty set”. Eschewing complete
adherence to the Russian doll aesthetic, we could also write`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.715ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 5178.2 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-I-1D719"
                  d="M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1500,0)">
                      <use data-c="1D719" xlink:href="#MJX-1-TEX-I-1D719"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2096,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2596,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3096,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`for the same thing, given that `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.628ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2929.6 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D719"
                      d="M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D719"
                          xlink:href="#MJX-1-TEX-I-1D719"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(873.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1929.6,0)">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(2429.6,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`Mind you, concerning this example, that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="14.118ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 6240.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                <path
                  id="MJX-1-TEX-N-2260"
                  d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2277.8,0)">
                      <use data-c="2260" xlink:href="#MJX-1-TEX-N-2260"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3333.6,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3833.6,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <ImageRight
              offset_x="1em"
              src="/images/svg_empty_set_cloud.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`because a box containing an empty box is not the same
thing as an empty box! Specifically,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="6.516ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 2880 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`answers “yes” to the question “do you contain 
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.262ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 1000 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(500,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`?”
(a.k.a., “do you contain `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.348ex"
                  height="2.034ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 596 899"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D719"
                      d="M409 688Q413 694 421 694H429H442Q448 688 448 686Q448 679 418 563Q411 535 404 504T392 458L388 442Q388 441 397 441T429 435T477 418Q521 397 550 357T579 260T548 151T471 65T374 11T279 -10H275L251 -105Q245 -128 238 -160Q230 -192 227 -198T215 -205H209Q189 -205 189 -198Q189 -193 211 -103L234 -11Q234 -10 226 -10Q221 -10 206 -8T161 6T107 36T62 89T43 171Q43 231 76 284T157 370T254 422T342 441Q347 441 348 445L378 567Q409 686 409 688ZM122 150Q122 116 134 91T167 53T203 35T237 27H244L337 404Q333 404 326 403T297 395T255 379T211 350T170 304Q152 276 137 237Q122 191 122 150ZM500 282Q500 320 484 347T444 385T405 400T381 404H378L332 217L284 29Q284 27 285 27Q293 27 317 33T357 47Q400 66 431 100T475 170T494 234T500 282Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D719"
                          xlink:href="#MJX-1-TEX-I-1D719"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`?”)`}
            </NoBreak>
            {` 
whereas`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="3.258ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 1440 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`answers “no” to the same question. (Indeed, while the empty set
`}
            <i>{`contains`}</i>
            {` nothing, it `}
            <i>{`is`}</i>
            {` something.) Similarly,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="20.634ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 9120.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                <path
                  id="MJX-1-TEX-N-2260"
                  d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2000,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2500,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3277.8,0)">
                      <use data-c="2260" xlink:href="#MJX-1-TEX-N-2260"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4333.6,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4833.6,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(5333.6,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(5833.6,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`etc, etc: adding a new outer layer changes the whole set each time.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Set union and set intersection.`}</b>
            {`
The so-called `}
            <i>{`union`}</i>
            {`
of two sets `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.717ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 759 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D435"
                          xlink:href="#MJX-1-TEX-I-1D435"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is written `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.072ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="8.537ex"
              height="2.404ex"
              role="img"
              focusable="false"
              viewBox="0 -1031 3773.4 1062.7"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                <path
                  id="MJX-1-TEX-N-222A"
                  d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path>
                <path
                  id="MJX-1-TEX-I-1D435"
                  d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(972.2,0)">
                      <use data-c="222A" xlink:href="#MJX-1-TEX-N-222A"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1861.4,0)">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and consists of the set of all things that are either in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` or in 
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.346ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 1037 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                    <path
                      id="MJX-1-TEX-N-2E"
                      d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D435"
                          xlink:href="#MJX-1-TEX-I-1D435"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(759,0)">
                        <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`
For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="34.937ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 15442.1 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                <path
                  id="MJX-1-TEX-N-222A"
                  d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path>
                <path
                  id="MJX-1-TEX-N-35"
                  d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2666.9,0)">
                      <use data-c="222A" xlink:href="#MJX-1-TEX-N-222A"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3556.1,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(4056.1,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4556.1,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(5000.8,0)">
                      <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(5500.8,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(6278.6,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(7334.3,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(7834.3,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(8334.3,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(8779,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(9279,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(9723.7,0)">
                      <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(10223.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.557ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 688"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-35"
                      d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` are the only elements to find
themselves either in
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` or in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-35"
                      d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.
The so-called `}
            <i>{`intersection`}</i>
            {` of two sets `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.717ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 759 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D435"
                          xlink:href="#MJX-1-TEX-I-1D435"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is written `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.072ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="8.537ex"
              height="2.404ex"
              role="img"
              focusable="false"
              viewBox="0 -1031 3773.4 1062.7"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                <path
                  id="MJX-1-TEX-N-2229"
                  d="M88 -21T75 -21T55 -7V200Q55 231 55 280Q56 414 60 428Q61 430 61 431Q77 500 152 549T332 598Q443 598 522 544T610 405Q611 399 611 194V-7Q604 -22 591 -22Q582 -22 572 -9L570 405Q563 433 556 449T529 485Q498 519 445 538T334 558Q251 558 179 518T96 401Q95 396 95 193V-7Q88 -21 75 -21Z"></path>
                <path
                  id="MJX-1-TEX-I-1D435"
                  d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(972.2,0)">
                      <use data-c="2229" xlink:href="#MJX-1-TEX-N-2229"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1861.4,0)">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and consists of the set of all things that are both in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and in 
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.717ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 759 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D435"
                          xlink:href="#MJX-1-TEX-I-1D435"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.
For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="28.782ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 12721.4 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                <path
                  id="MJX-1-TEX-N-2229"
                  d="M88 -21T75 -21T55 -7V200Q55 231 55 280Q56 414 60 428Q61 430 61 431Q77 500 152 549T332 598Q443 598 522 544T610 405Q611 399 611 194V-7Q604 -22 591 -22Q582 -22 572 -9L570 405Q563 433 556 449T529 485Q498 519 445 538T334 558Q251 558 179 518T96 401Q95 396 95 193V-7Q88 -21 75 -21Z"></path>
                <path
                  id="MJX-1-TEX-N-35"
                  d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(500,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1000,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1444.7,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1944.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2666.9,0)">
                      <use data-c="2229" xlink:href="#MJX-1-TEX-N-2229"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3556.1,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(4056.1,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4556.1,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(5000.8,0)">
                      <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(5500.8,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(6278.6,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(7334.3,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(7834.3,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(8334.3,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.507ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 666"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is the only element that is both in
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` and in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.531ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2444.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-35"
                      d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(500,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1000,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1444.7,0)">
                        <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1944.7,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="16.918ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 7477.9 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                <path
                  id="MJX-1-TEX-N-222A"
                  d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path>
                <path
                  id="MJX-1-TEX-I-1D435"
                  d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                <path
                  id="MJX-1-TEX-N-29"
                  d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(849.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1794.6,0)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2183.6,0)">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3155.8,0)">
                      <use data-c="222A" xlink:href="#MJX-1-TEX-N-222A"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(4045,0)">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4804,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`if and only if`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.13ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="8.29ex"
              height="2.463ex"
              role="img"
              focusable="false"
              viewBox="0 -1031 3664.2 1088.6"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(849.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1794.6,0)">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {``}
            <i>{`or`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.13ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="8.319ex"
              height="2.355ex"
              role="img"
              focusable="false"
              viewBox="0 -983.5 3677.1 1041.1"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D435"
                  d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(849.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1794.6,0)">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`because that's how we defined “union”. (Replace “or”
by “and” to get a definition of intersection.)
In fact, a logician would define the union of two sets by an
abstruse expression of the type`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="51.892ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 22936.5 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2208"
                  d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                <path
                  id="MJX-1-TEX-N-222A"
                  d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path>
                <path
                  id="MJX-1-TEX-I-1D435"
                  d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                <path
                  id="MJX-1-TEX-N-29"
                  d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                <path
                  id="MJX-1-TEX-N-27FA"
                  d="M1438 514Q1438 525 1454 525Q1459 525 1462 525T1467 525T1471 524T1473 523T1475 520T1477 517T1480 512Q1517 438 1578 381T1689 300T1785 263Q1802 258 1802 250T1793 239T1756 228T1698 204Q1554 134 1480 -12Q1476 -21 1473 -22T1458 -24Q1438 -24 1438 -17Q1438 -13 1443 0Q1478 69 1529 123L1539 133H318L328 123Q379 69 414 0Q419 -13 419 -17Q419 -24 399 -24Q388 -24 385 -23T377 -12Q332 77 253 144T72 237Q62 240 59 242T56 250T59 257T70 262T89 268T119 278T160 296Q303 366 377 512Q382 522 385 523T401 525Q419 524 419 515Q419 510 414 500Q379 431 328 377L318 367H1539L1529 377Q1496 412 1467 458T1438 514ZM274 173H1583L1593 181Q1632 211 1710 250Q1709 251 1692 259T1647 283T1593 319L1583 327H930L927 328L602 327H274L264 319Q225 289 147 250Q148 249 165 241T210 217T264 181L274 173Z"></path>
                <path
                  id="MJX-1-TEX-N-2228"
                  d="M55 580Q56 587 61 592T75 598Q86 598 96 580L333 48L570 580Q579 596 586 597Q588 598 591 598Q609 598 611 580Q611 574 546 426T415 132T348 -15Q343 -22 333 -22T318 -15Q317 -14 252 131T121 425T55 580Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(849.8,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1794.6,0)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2183.6,0)">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3155.8,0)">
                      <use data-c="222A" xlink:href="#MJX-1-TEX-N-222A"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(4045,0)">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4804,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(5193,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mo" transform="translate(5748.8,0)">
                      <use data-c="27FA" xlink:href="#MJX-1-TEX-N-27FA"></use>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(7606.8,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mo" transform="translate(8162.6,0)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(8551.6,0)">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(9401.3,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(10346.1,0)">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(11096.1,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(11707.3,0)">
                      <use data-c="2228" xlink:href="#MJX-1-TEX-N-2228"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(12596.6,0)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(12985.6,0)">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(13835.3,0)">
                      <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(14780.1,0)">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(15539.1,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`read`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {`an element `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is in the thing I call “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.929ex"
                  height="1.67ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 2620.4 738"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                    <path
                      id="MJX-1-TEX-N-222A"
                      d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(972.2,0)">
                        <use data-c="222A" xlink:href="#MJX-1-TEX-N-222A"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1861.4,0)">
                        <use
                          data-c="1D435"
                          xlink:href="#MJX-1-TEX-I-1D435"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`”
if and only if `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.697ex"
                  height="1.62ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 750 716"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D434"
                      d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D434"
                          xlink:href="#MJX-1-TEX-I-1D434"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` or `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.294ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 572 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.717ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 759 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D435"
                      d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D435"
                          xlink:href="#MJX-1-TEX-I-1D435"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`as “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.054ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.95ex"
                  height="1.242ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -525 1746 549"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-27FA"
                      d="M1438 514Q1438 525 1454 525Q1459 525 1462 525T1467 525T1471 524T1473 523T1475 520T1477 517T1480 512Q1517 438 1578 381T1689 300T1785 263Q1802 258 1802 250T1793 239T1756 228T1698 204Q1554 134 1480 -12Q1476 -21 1473 -22T1458 -24Q1438 -24 1438 -17Q1438 -13 1443 0Q1478 69 1529 123L1539 133H318L328 123Q379 69 414 0Q419 -13 419 -17Q419 -24 399 -24Q388 -24 385 -23T377 -12Q332 77 253 144T72 237Q62 240 59 242T56 250T59 257T70 262T89 268T119 278T160 296Q303 366 377 512Q382 522 385 523T401 525Q419 524 419 515Q419 510 414 500Q379 431 328 377L318 367H1539L1529 377Q1496 412 1467 458T1438 514ZM274 173H1583L1593 181Q1632 211 1710 250Q1709 251 1692 259T1647 283T1593 319L1583 327H930L927 328L602 327H274L264 319Q225 289 147 250Q148 249 165 241T210 217T264 181L274 173Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mstyle">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(-167,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(-334,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g data-mml-node="mo" transform="translate(-56,0)">
                        <use data-c="27FA" xlink:href="#MJX-1-TEX-N-27FA"></use>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(1802,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(2080,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(1913,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` means “if and only if” and
“`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.509ex"
                  height="1.403ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -598 667 620"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-2228"
                      d="M55 580Q56 587 61 592T75 598Q86 598 96 580L333 48L570 580Q579 596 586 597Q588 598 591 598Q609 598 611 580Q611 574 546 426T415 132T348 -15Q343 -22 333 -22T318 -15Q317 -14 252 131T121 425T55 580Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="2228" xlink:href="#MJX-1-TEX-N-2228"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` means “or”. (You can figure out the 
similar definition for the intersection of two sets
if we tell you that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.072ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="2.173ex"
              height="2.02ex"
              role="img"
              focusable="false"
              viewBox="0 -861.1 960.5 892.8"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-2227"
                  d="M318 591Q325 598 333 598Q344 598 348 591Q349 590 414 445T545 151T611 -4Q609 -22 591 -22Q588 -22 586 -21T581 -20T577 -17T575 -13T572 -9T570 -4L333 528L96 -4Q87 -20 80 -21Q78 -22 75 -22Q57 -22 55 -4Q55 2 120 150T251 444T318 591Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="2227" xlink:href="#MJX-1-TEX-N-2227"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`means “and”.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sets encountered in calculus.`}</b>
            {`
In calculus, you will see sets such as `}
            <i>{`the real numbers`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: 0;"
              xmlns="http://www.w3.org/2000/svg"
              width="2.352ex"
              height="2.225ex"
              role="img"
              focusable="false"
              viewBox="0 -983.5 1039.7 983.5"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-D-211D"
                  d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="211D" xlink:href="#MJX-1-TEX-D-211D"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which is an infinite set containing all “ordinary”
decimal numbers, or such as `}
            <i>{`the integers`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: 0;"
              xmlns="http://www.w3.org/2000/svg"
              width="2.173ex"
              height="2.225ex"
              role="img"
              focusable="false"
              viewBox="0 -983.5 960.5 983.5"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-D-2124"
                  d="M39 -1Q29 9 29 12Q29 23 60 77T219 337L410 648H364Q261 648 210 628Q168 612 142 588T109 545T97 509T88 490Q85 489 80 489Q72 489 61 503L70 588Q72 607 75 628T79 662T81 675Q84 677 88 681Q90 683 341 683H592Q604 673 604 666Q604 662 412 348L221 37Q221 35 301 35Q406 35 446 48Q504 68 543 111T597 212Q602 239 617 239Q624 239 629 234T635 223Q635 215 621 113T604 8L597 1Q595 -1 317 -1H39ZM148 637L166 648H112V632Q111 629 110 622T108 612Q108 608 110 608T116 612T129 623T148 637ZM552 646Q552 648 504 648Q452 648 450 643Q448 639 266 343T77 37Q77 35 128 35H179L366 339L552 646ZM572 35Q581 89 581 97L561 77Q542 59 526 48L508 37L539 35H572Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="2124" xlink:href="#MJX-1-TEX-D-2124"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which contains all “whole” numbers, including the
negative ones. You might also encounter
`}
            <i>{`the natural numbers`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.065ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="2.352ex"
              height="2.29ex"
              role="img"
              focusable="false"
              viewBox="0 -983.5 1039.7 1012.3"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-D-2115"
                  d="M20 664Q20 666 31 683H142Q256 683 258 681Q259 680 279 653T342 572T422 468L582 259V425Q582 451 582 490T583 541Q583 611 573 628T522 648Q500 648 493 654Q484 665 493 679L500 683H691Q702 676 702 666Q702 657 698 652Q688 648 680 648Q633 648 627 612Q624 601 624 294V-8Q616 -20 607 -20Q601 -20 596 -15Q593 -13 371 270L156 548L153 319Q153 284 153 234T152 167Q152 103 156 78T172 44T213 34Q236 34 242 28Q253 17 242 3L236 -1H36Q24 6 24 16Q24 34 56 34Q58 35 69 36T86 40T100 50T109 72Q111 83 111 345V603L96 619Q72 643 44 648Q20 648 20 664ZM413 419L240 648H120L136 628Q137 626 361 341T587 54L589 68Q589 78 589 121V192L413 419Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="2115" xlink:href="#MJX-1-TEX-D-2115"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which contains only those integers that are greater than `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.557ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 688"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` (i.e.,
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.976ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 7061.6 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-2115"
                      d="M20 664Q20 666 31 683H142Q256 683 258 681Q259 680 279 653T342 572T422 468L582 259V425Q582 451 582 490T583 541Q583 611 573 628T522 648Q500 648 493 654Q484 665 493 679L500 683H691Q702 676 702 666Q702 657 698 652Q688 648 680 648Q633 648 627 612Q624 601 624 294V-8Q616 -20 607 -20Q601 -20 596 -15Q593 -13 371 270L156 548L153 319Q153 284 153 234T152 167Q152 103 156 78T172 44T213 34Q236 34 242 28Q253 17 242 3L236 -1H36Q24 6 24 16Q24 34 56 34Q58 35 69 36T86 40T100 50T109 72Q111 83 111 345V603L96 619Q72 643 44 648Q20 648 20 664ZM413 419L240 648H120L136 628Q137 626 361 341T587 54L589 68Q589 78 589 121V192L413 419Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-33"
                      d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                    <path
                      id="MJX-1-TEX-N-2026"
                      d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60ZM525 60Q525 84 542 102T585 120Q609 120 627 104T646 61Q646 36 629 18T586 0T543 17T525 60ZM972 60Q972 84 989 102T1032 120Q1056 120 1074 104T1093 61Q1093 36 1076 18T1033 0T990 17T972 60Z"></path>
                    <path
                      id="MJX-1-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="2115"
                            xlink:href="#MJX-1-TEX-D-2115"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(999.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(2055.6,0)">
                        <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(2555.6,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3055.6,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(3500.2,0)">
                        <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(4000.2,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(4444.9,0)">
                        <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(4944.9,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(5389.6,0)">
                        <use data-c="2026" xlink:href="#MJX-1-TEX-N-2026"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(6561.6,0)">
                        <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`).`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`Secondly—and this pretty much wraps it up for those sets 
that are commonly seen in calculus—you will
encounter `}
            <i>{`intervals`}</i>
            {`. For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="6.381ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 2820.5 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-5B"
                  d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44E"
                  d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44F"
                  d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>
                <path
                  id="MJX-1-TEX-N-5D"
                  d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="5B" xlink:href="#MJX-1-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(278,0)">
                      <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(807,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1251.7,0)">
                      <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1680.7,0)">
                      <use data-c="5D" xlink:href="#MJX-1-TEX-N-5D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a _closed interval_, consisting of all (real) numbers 
greater than or equal to `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.023ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.197ex"
                  height="1.02ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -441 529 451"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` and less than or equal to `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.971ex"
                  height="1.595ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 429 705"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44F"
                      d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.`}
            </NoBreak>
            {` Or`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="6.743ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 2980.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-5B"
                  d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44E"
                  d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44F"
                  d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>
                <path
                  id="MJX-1-TEX-N-29"
                  d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="5B" xlink:href="#MJX-1-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(278,0)">
                      <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(807,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1251.7,0)">
                      <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1680.7,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a `}
            <i>{`half-open`}</i>
            {` interval, consisting of all real numbers
greater than or equal to `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.023ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.197ex"
                  height="1.02ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -441 529 451"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` and less than `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.971ex"
                  height="1.595ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 429 705"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44F"
                      d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.`}
            </NoBreak>
            {` Etc.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="19.731ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 8721 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-221E"
                  d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-29"
                  d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-D-211D"
                  d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(389,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1167,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2167,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2611.7,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3611.7,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4278.4,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(5334.2,0)">
                      <g data-mml-node="mi">
                        <use data-c="211D" xlink:href="#MJX-1-TEX-D-211D"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`since`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="13.034ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 5761 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-221E"
                  d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-29"
                  d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(389,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1167,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2167,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2611.7,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3611.7,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`(which is an `}
            <i>{`open`}</i>
            {` interval, by the way) means`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the set of real numbers with no bound below,
and no bound above`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`which is all of `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.633ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 722 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-211D"
                      d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="211D"
                            xlink:href="#MJX-1-TEX-D-211D"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sets not encountered in calculus.`}</b>
            {`
If you take a more advanced course, you might encounter 
the so-called _set of extended real numbers_,
written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: 0;"
              xmlns="http://www.w3.org/2000/svg"
              width="2.352ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1440 1039.7 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-D-211D"
                  d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                <path id="MJX-1-TEX-S4-2013" d="M0 248V285H499V248H0Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mover">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="211D"
                            xlink:href="#MJX-1-TEX-D-211D"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(0,615)">
                        <svg
                          width="722"
                          height="237"
                          x="0"
                          y="148"
                          viewBox="180.5 148 722 237">
                          <use
                            data-c="2013"
                            xlink:href="#MJX-1-TEX-S4-2013"
                            transform="scale(2.166,1)"></use>
                        </svg>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and which consists of all the numbers in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.633ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 722 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-211D"
                      d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="211D"
                            xlink:href="#MJX-1-TEX-D-211D"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` plus the formal 
symbols “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4.023ex"
                  height="1.505ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 1778 665"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-221E"
                      d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mo">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(778,0)">
                        <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”,`}
            </NoBreak>
            {` “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.262ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 1000 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-221E"
                      d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` as well:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="26.427ex"
              height="4.072ex"
              role="img"
              focusable="false"
              viewBox="0 -1440 11680.8 1800"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-D-211D"
                  d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                <path id="MJX-1-TEX-S4-2013" d="M0 248V285H499V248H0Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-222A"
                  d="M591 598H592Q604 598 611 583V376Q611 345 611 296Q610 162 606 148Q605 146 605 145Q586 68 507 23T333 -22Q268 -22 209 -1T106 66T56 173Q55 180 55 384L56 585Q66 598 75 598Q85 598 95 585V378L96 172L98 162Q112 95 181 57T332 18Q415 18 487 58T570 175Q571 180 571 383V583Q579 598 591 598Z"></path>
                <path
                  id="MJX-1-TEX-N-7B"
                  d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-221E"
                  d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-7D"
                  d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mover">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="211D"
                            xlink:href="#MJX-1-TEX-D-211D"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(0,615)">
                        <svg
                          width="722"
                          height="237"
                          x="0"
                          y="148"
                          viewBox="180.5 148 722 237">
                          <use
                            data-c="2013"
                            xlink:href="#MJX-1-TEX-S4-2013"
                            transform="scale(2.166,1)"></use>
                        </svg>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(999.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(2055.6,0)">
                      <g data-mml-node="mi">
                        <use data-c="211D" xlink:href="#MJX-1-TEX-D-211D"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(2999.8,0)">
                      <use data-c="222A" xlink:href="#MJX-1-TEX-N-222A"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3889,0)">
                      <use data-c="7B" xlink:href="#MJX-1-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4389,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(5167,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(6167,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(6611.7,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(7611.7,0)">
                      <use data-c="7D" xlink:href="#MJX-1-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`(I.e., ...well, you get it!)`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`You can view `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.633ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1000 722 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-211D"
                      d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                    <path
                      id="MJX-1-TEX-S4-2013"
                      d="M0 248V285H499V248H0Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mover">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use
                              data-c="211D"
                              xlink:href="#MJX-1-TEX-D-211D"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(0,615)">
                          <svg
                            width="722"
                            height="237"
                            x="0"
                            y="148"
                            viewBox="180.5 148 722 237">
                            <use
                              data-c="2013"
                              xlink:href="#MJX-1-TEX-S4-2013"
                              transform="scale(2.166,1)"></use>
                          </svg>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` as a kind “closed interval”
version of `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.633ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 722 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-211D"
                      d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="211D"
                            xlink:href="#MJX-1-TEX-D-211D"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` that is, think of `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.633ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1000 722 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-211D"
                      d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                    <path
                      id="MJX-1-TEX-S4-2013"
                      d="M0 248V285H499V248H0Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mover">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use
                              data-c="211D"
                              xlink:href="#MJX-1-TEX-D-211D"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(0,615)">
                          <svg
                            width="722"
                            height="237"
                            x="0"
                            y="148"
                            viewBox="180.5 148 722 237">
                            <use
                              data-c="2013"
                              xlink:href="#MJX-1-TEX-S4-2013"
                              transform="scale(2.166,1)"></use>
                          </svg>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` as being
the closed interval`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="12.311ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 5441.3 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-5B"
                  d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-221E"
                  d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-N-5D"
                  d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="5B" xlink:href="#MJX-1-TEX-N-5B"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(278,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1056,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2056,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2500.7,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3500.7,0)">
                      <use data-c="5D" xlink:href="#MJX-1-TEX-N-5D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`with the two infinite endpoints `}
            <i>{`included`}</i>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`Does all this have any “real meaning”? Good question! The answer
is: `}
            <i>{`not until you give it one`}</i>
            {`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`E.g. (to give you a brief flavor, before we move on forever from the topic),
the value of something like`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.267ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.404ex"
              height="2.437ex"
              role="img"
              focusable="false"
              viewBox="0 -959 5040.6 1077.1"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-30"
                  d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path
                  id="MJX-1-TEX-N-2E"
                  d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                <path
                  id="MJX-1-TEX-N-35"
                  d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                <path
                  id="MJX-1-TEX-N-221E"
                  d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mn">
                      <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      <use
                        data-c="2E"
                        xlink:href="#MJX-1-TEX-N-2E"
                        transform="translate(500,0)"></use>
                      <use
                        data-c="35"
                        xlink:href="#MJX-1-TEX-N-35"
                        transform="translate(778,0)"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1500.2,0)">
                      <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2500.4,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`must be `}
            <i>{`defined`}</i>
            {`. (It is defined to be `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.262ex"
                  height="1.025ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 1000 453"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-221E"
                      d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` in case you're curious.
In fact, one has `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.505ex"
                  height="1.505ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 5085 665"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                    <path
                      id="MJX-1-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-221E"
                      d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(751.2,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1751.4,0)">
                        <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3029.2,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4085,0)">
                        <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` for any `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.486ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.237ex"
                  height="2.106ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 3640.6 931"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                    <path
                      id="MJX-1-TEX-N-2260"
                      d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-221E"
                      d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(806.8,0)">
                        <use data-c="2260" xlink:href="#MJX-1-TEX-N-2260"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1862.6,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2640.6,0)">
                        <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.)`}
            </NoBreak>
            {` And some things
remain explicitly `}
            <i>{`undefined`}</i>
            {`. For example, the expression`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.814ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="15.568ex"
              height="3.258ex"
              role="img"
              focusable="false"
              viewBox="0 -1080 6881 1440"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-221E"
                  d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z"></path>
                <path
                  id="MJX-1-TEX-N-29"
                  d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mstyle" transform="scale(1.44)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(389,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1167,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2167,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2778.2,0)">
                      <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(3778.4,0)">
                      <use data-c="221E" xlink:href="#MJX-1-TEX-N-221E"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`has an `}
            <i>{`undefined`}</i>
            {` value—the same way, say, that division by
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.131ex"
                  height="1.557ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 500 688"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mn">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is undefined in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: 0;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.633ex"
                  height="1.545ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 722 683"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-D-211D"
                      d="M17 665Q17 672 28 683H221Q415 681 439 677Q461 673 481 667T516 654T544 639T566 623T584 607T597 592T607 578T614 565T618 554L621 548Q626 530 626 497Q626 447 613 419Q578 348 473 326L455 321Q462 310 473 292T517 226T578 141T637 72T686 35Q705 30 705 16Q705 7 693 -1H510Q503 6 404 159L306 310H268V183Q270 67 271 59Q274 42 291 38Q295 37 319 35Q344 35 353 28Q362 17 353 3L346 -1H28Q16 5 16 16Q16 35 55 35Q96 38 101 52Q106 60 106 341T101 632Q95 645 55 648Q17 648 17 665ZM241 35Q238 42 237 45T235 78T233 163T233 337V621L237 635L244 648H133Q136 641 137 638T139 603T141 517T141 341Q141 131 140 89T134 37Q133 36 133 35H241ZM457 496Q457 540 449 570T425 615T400 634T377 643Q374 643 339 648Q300 648 281 635Q271 628 270 610T268 481V346H284Q327 346 375 352Q421 364 439 392T457 496ZM492 537T492 496T488 427T478 389T469 371T464 361Q464 360 465 360Q469 360 497 370Q593 400 593 495Q593 592 477 630L457 637L461 626Q474 611 488 561Q492 537 492 496ZM464 243Q411 317 410 317Q404 317 401 315Q384 315 370 312H346L526 35H619L606 50Q553 109 464 243Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use
                            data-c="211D"
                            xlink:href="#MJX-1-TEX-D-211D"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.`}
            </NoBreak>
            {` 
(Well, anyway, end of lesson.)`}
          </VerticalChunk>
        </Section>
      </Bootcamp1>{" "}
    </>
  );
};
export default Article;
