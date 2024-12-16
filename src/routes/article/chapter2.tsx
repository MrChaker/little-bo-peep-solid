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

const Chapter2 = (props: any) => {
  return (
    <>
      <ArticleTitle
        label={`Chapter 2: ` + props.title}
        on_mobile_label={`Chapter 2: ` + props.mobile_title}
      />
      {props.children}
    </>
  );
};

const Article = () => {
  return (
    <>
      {" "}
      <Chapter2 title="Slopes">
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Slopes.`}</b>
            {`
The `}
            <i>{`slope`}</i>
            {` of a line is a mathematical measure
of how “steep” a line is. Here are a few examples
(for an explanation of the values, see below):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/chapter_2_1.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`To explain, the slope of a line is...`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.891ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="66.249ex"
              height="4.74ex"
              role="img"
              focusable="false"
              viewBox="0 -1259 29282.2 2095"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-64"
                  d="M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(3679.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(5679.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(5846.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6013.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6180.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6347.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mtext" transform="translate(6514.6,0)">
                    <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(500,0)"></use>
                    <use
                      data-c="64"
                      xlink:href="#MJX-1-TEX-N-64"
                      transform="translate(1056,0)"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8126.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8293.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8460.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8627.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8794.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8961.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(10961.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(14641.1,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(18320.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(20320.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(20487.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(20654.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(20821.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(20988.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mtext" transform="translate(21155.7,0)">
                    <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(500,0)"></use>
                    <use
                      data-c="64"
                      xlink:href="#MJX-1-TEX-N-64"
                      transform="translate(1056,0)"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(22767.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(22934.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(23101.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(23268.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(23435.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(23602.7,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(25602.7,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the number of units the line goes up with each
unit to the right`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`...assuming that numbers on the `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`-axis`}
            </NoBreak>
            {` increase
going up and that numbers on the `}
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
              {`-axis`}
            </NoBreak>
            {` increase
going right, as is usually the case. One can also
describe slope as...`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the amount of vertical change per unit of
horizontal change`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`...more elegant!`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`For example, the line below has slope 1, because
it goes up by `}
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
            {` unit for each unit to the right:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image class="pl-[2px]" src="/images/slope_1_example.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {`On the other hand, the line below has slope
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4.652ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2056 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-2E"
                      d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(778,0)">
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
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` because it goes up by `}
            <i>{`minus`}</i>
            {` `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.891ex"
                  height="1.557ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 1278 688"
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
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
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
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` units
with each unit to the right:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image
            class="pl-[19.5px]"
            src="/images/slope_0.5_example.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`(Etc.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Measuring Slope.`}</b>
            {`
The slope of a line is also the ratio of vertical
change to horizontal change between any two
distinct points `}
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
              {`,`}
            </NoBreak>
            {` `}
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
            {` on the line:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image
            cloud_image={true}
            class="mt-6 mb-2"
            src="/images/31.svg"></Image>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -2.018ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="38.386ex"
              height="5.167ex"
              role="img"
              focusable="false"
              viewBox="0 -1392 16966.6 2284"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-76"
                  d="M338 431Q344 429 422 429Q479 429 503 431H508V385H497Q439 381 423 345Q421 341 356 172T288 -2Q283 -11 263 -11Q244 -11 239 -2Q99 359 98 364Q93 378 82 381T43 385H19V431H25L33 430Q41 430 53 430T79 430T104 429T122 428Q217 428 232 431H240V385H226Q187 384 184 370Q184 366 235 234L286 102L377 341V349Q377 363 367 372T349 383T335 385H331V431H338Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-74"
                  d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-63"
                  d="M370 305T349 305T313 320T297 358Q297 381 312 396Q317 401 317 402T307 404Q281 408 258 408Q209 408 178 376Q131 329 131 219Q131 137 162 90Q203 29 272 29Q313 29 338 55T374 117Q376 125 379 127T395 129H409Q415 123 415 120Q415 116 411 104T395 71T366 33T318 2T249 -11Q163 -11 99 53T34 214Q34 318 99 383T250 448T370 421T404 357Q404 334 387 320Z"></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path id="MJX-1-TEX-N-20" d=""></path>
                <path
                  id="MJX-1-TEX-N-68"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 124T102 167T103 217T103 272T103 329Q103 366 103 407T103 482T102 542T102 586T102 603Q99 622 88 628T43 637H25V660Q25 683 27 683L37 684Q47 685 66 686T103 688Q120 689 140 690T170 693T181 694H184V367Q244 442 328 442Q451 442 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-67"
                  d="M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z"></path>
                <path
                  id="MJX-1-TEX-N-66"
                  d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z"></path>
                <path
                  id="MJX-1-TEX-N-6D"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-41"
                  d="M255 0Q240 3 140 3Q48 3 39 0H32V46H47Q119 49 139 88Q140 91 192 245T295 553T348 708Q351 716 366 716H376Q396 715 400 709Q402 707 508 390L617 67Q624 54 636 51T687 46H717V0H708Q699 3 581 3Q458 3 437 0H427V46H440Q510 46 510 64Q510 66 486 138L462 209H229L209 150Q189 91 189 85Q189 72 209 59T259 46H264V0H255ZM447 255L345 557L244 256Q244 255 345 255H447Z"></path>
                <path
                  id="MJX-1-TEX-N-42"
                  d="M131 622Q124 629 120 631T104 634T61 637H28V683H229H267H346Q423 683 459 678T531 651Q574 627 599 590T624 512Q624 461 583 419T476 360L466 357Q539 348 595 302T651 187Q651 119 600 67T469 3Q456 1 242 0H28V46H61Q103 47 112 49T131 61V622ZM511 513Q511 560 485 594T416 636Q415 636 403 636T371 636T333 637Q266 637 251 636T232 628Q229 624 229 499V374H312L396 375L406 377Q410 378 417 380T442 393T474 417T499 456T511 513ZM537 188Q537 239 509 282T430 336L329 337H229V200V116Q229 57 234 52Q240 47 334 47H383Q425 47 443 53Q486 67 511 104T537 188Z"></path>
                <path
                  id="MJX-1-TEX-N-7A"
                  d="M42 263Q44 270 48 345T53 423V431H393Q399 425 399 415Q399 403 398 402L381 378Q364 355 331 309T265 220L134 41L182 40H206Q254 40 283 46T331 77Q352 105 359 185L361 201Q361 202 381 202H401V196Q401 195 393 103T384 6V0H209L34 1L31 3Q28 8 28 17Q28 30 29 31T160 210T294 394H236Q169 393 152 388Q127 382 113 367Q89 344 82 264V255H42V263Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2449.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(3505.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mtext" transform="translate(790,676)">
                        <use data-c="76" xlink:href="#MJX-1-TEX-N-76"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(528,0)"></use>
                        <use
                          data-c="72"
                          xlink:href="#MJX-1-TEX-N-72"
                          transform="translate(972,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(1364,0)"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(1753,0)"></use>
                        <use
                          data-c="63"
                          xlink:href="#MJX-1-TEX-N-63"
                          transform="translate(2031,0)"></use>
                        <use
                          data-c="61"
                          xlink:href="#MJX-1-TEX-N-61"
                          transform="translate(2475,0)"></use>
                        <use
                          data-c="6C"
                          xlink:href="#MJX-1-TEX-N-6C"
                          transform="translate(2975,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(3253,0)"></use>
                        <use
                          data-c="63"
                          xlink:href="#MJX-1-TEX-N-63"
                          transform="translate(3503,0)"></use>
                        <use
                          data-c="68"
                          xlink:href="#MJX-1-TEX-N-68"
                          transform="translate(3947,0)"></use>
                        <use
                          data-c="61"
                          xlink:href="#MJX-1-TEX-N-61"
                          transform="translate(4503,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(5003,0)"></use>
                        <use
                          data-c="67"
                          xlink:href="#MJX-1-TEX-N-67"
                          transform="translate(5559,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(6059,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(6503,0)"></use>
                        <use
                          data-c="66"
                          xlink:href="#MJX-1-TEX-N-66"
                          transform="translate(6753,0)"></use>
                        <use
                          data-c="72"
                          xlink:href="#MJX-1-TEX-N-72"
                          transform="translate(7059,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(7451,0)"></use>
                        <use
                          data-c="6D"
                          xlink:href="#MJX-1-TEX-N-6D"
                          transform="translate(7951,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(8784,0)"></use>
                        <use
                          data-c="41"
                          xlink:href="#MJX-1-TEX-N-41"
                          transform="translate(9034,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(9784,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(10034,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(10423,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(10923,0)"></use>
                        <use
                          data-c="42"
                          xlink:href="#MJX-1-TEX-N-42"
                          transform="translate(11173,0)"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(220,-686)">
                        <use data-c="68" xlink:href="#MJX-1-TEX-N-68"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(556,0)"></use>
                        <use
                          data-c="72"
                          xlink:href="#MJX-1-TEX-N-72"
                          transform="translate(1056,0)"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(1448,0)"></use>
                        <use
                          data-c="7A"
                          xlink:href="#MJX-1-TEX-N-7A"
                          transform="translate(1726,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(2170,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(2670,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(3226,0)"></use>
                        <use
                          data-c="61"
                          xlink:href="#MJX-1-TEX-N-61"
                          transform="translate(3615,0)"></use>
                        <use
                          data-c="6C"
                          xlink:href="#MJX-1-TEX-N-6C"
                          transform="translate(4115,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(4393,0)"></use>
                        <use
                          data-c="63"
                          xlink:href="#MJX-1-TEX-N-63"
                          transform="translate(4643,0)"></use>
                        <use
                          data-c="68"
                          xlink:href="#MJX-1-TEX-N-68"
                          transform="translate(5087,0)"></use>
                        <use
                          data-c="61"
                          xlink:href="#MJX-1-TEX-N-61"
                          transform="translate(5643,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(6143,0)"></use>
                        <use
                          data-c="67"
                          xlink:href="#MJX-1-TEX-N-67"
                          transform="translate(6699,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(7199,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(7643,0)"></use>
                        <use
                          data-c="66"
                          xlink:href="#MJX-1-TEX-N-66"
                          transform="translate(7893,0)"></use>
                        <use
                          data-c="72"
                          xlink:href="#MJX-1-TEX-N-72"
                          transform="translate(8199,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(8591,0)"></use>
                        <use
                          data-c="6D"
                          xlink:href="#MJX-1-TEX-N-6D"
                          transform="translate(9091,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(9924,0)"></use>
                        <use
                          data-c="41"
                          xlink:href="#MJX-1-TEX-N-41"
                          transform="translate(10174,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(10924,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(11174,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(11563,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(12063,0)"></use>
                        <use
                          data-c="42"
                          xlink:href="#MJX-1-TEX-N-42"
                          transform="translate(12313,0)"></use>
                      </g>
                      <rect width="13221" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`Indeed, dividing the vertical change by the
horizontal change gives the per-horizontal-unit
vertical change.`}</VerticalChunk>
          <VerticalChunk indent={true}>{`More precisely, if`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.566ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.858ex"
              height="2.262ex"
              role="img"
              focusable="false"
              viewBox="0 -750 5241.3 1000"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D434"
                  d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                  <g data-mml-node="mi">
                    <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1027.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2083.6,0)">
                    <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2472.6,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3481.1,0)">
                    <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(3925.8,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(4852.3,0)">
                    <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.566ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.879ex"
              height="2.262ex"
              role="img"
              focusable="false"
              viewBox="0 -750 5250.3 1000"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D435"
                  d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2C"
                  d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                  <g data-mml-node="mi">
                    <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1036.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2092.6,0)">
                    <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2481.6,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3490.1,0)">
                    <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(3934.8,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(4861.3,0)">
                    <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`then`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.339ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.329ex"
              height="1.658ex"
              role="img"
              focusable="false"
              viewBox="0 -583 3239.6 733"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1230.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2231,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="6.958ex"
              height="1.783ex"
              role="img"
              focusable="false"
              viewBox="0 -583 3075.6 788"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1148.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2149,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`are the horizontal _&_ the vertical change,
respectively, from `}
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
            {` to `}
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
              {`,`}
            </NoBreak>
            {` so`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.891ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="16.256ex"
              height="4.74ex"
              role="img"
              focusable="false"
              viewBox="0 -1259 7185.1 2095"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
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
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2449.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(3505.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <ImageRight offset_y="-1rem" src="/images/32.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`more succinctly. We call this the `}
            <i>{`slope formula`}</i>
            {`.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {``}
              <b>{`Example 1.`}</b>
              {`
A line that passes through the points`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -0.566ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="11.503ex"
                height="2.262ex"
                role="img"
                focusable="false"
                viewBox="0 -750 5084.2 1000"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-I-1D434"
                    d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                  <path
                    id="MJX-1-TEX-N-28"
                    d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                  <path
                    id="MJX-1-TEX-N-2212"
                    d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                    id="MJX-1-TEX-N-29"
                    d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                </defs>
                <g
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mi">
                      <use data-c="1D434" xlink:href="#MJX-1-TEX-I-1D434"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1027.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2083.6,0)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2472.6,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(3250.6,0)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3750.6,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(4195.2,0)">
                      <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4695.2,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`and`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -0.566ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="9.763ex"
                height="2.262ex"
                role="img"
                focusable="false"
                viewBox="0 -750 4315.2 1000"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-I-1D435"
                    d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                  <path
                    id="MJX-1-TEX-N-28"
                    d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                  <path
                    id="MJX-1-TEX-N-34"
                    d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                  <path
                    id="MJX-1-TEX-N-2C"
                    d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                  <path
                    id="MJX-1-TEX-N-31"
                    d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
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
                    <g data-mml-node="mi">
                      <use data-c="1D435" xlink:href="#MJX-1-TEX-I-1D435"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1036.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2092.6,0)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(2481.6,0)">
                      <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2981.6,0)">
                      <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(3426.2,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3926.2,0)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`has slope`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -2.172ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="23.981ex"
                height="5.233ex"
                role="img"
                focusable="false"
                viewBox="0 -1353 10599.6 2313"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-N-31"
                    d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  <path
                    id="MJX-1-TEX-N-2212"
                    d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  <path
                    id="MJX-1-TEX-N-35"
                    d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                  <path
                    id="MJX-1-TEX-N-34"
                    d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                  <path
                    id="MJX-1-TEX-N-28"
                    d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                  <path
                    id="MJX-1-TEX-N-32"
                    d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                  <path
                    id="MJX-1-TEX-N-29"
                    d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                  <path
                    id="MJX-1-TEX-N-36"
                    d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path>
                  <path
                    id="MJX-1-TEX-N-33"
                    d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
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
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                      <g data-mml-node="mfrac">
                        <g data-mml-node="mrow" transform="translate(998,676)">
                          <g data-mml-node="mn">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(722.2,0)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(1722.4,0)">
                            <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                          </g>
                        </g>
                        <g data-mml-node="mrow" transform="translate(220,-710)">
                          <g data-mml-node="mn">
                            <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(722.2,0)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1722.4,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(2111.4,0)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(2889.4,0)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(3389.4,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                        <rect width="3978.4" height="60" x="120" y="220"></rect>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(4496.2,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(5552,0)">
                      <g data-mml-node="mfrac">
                        <g data-mml-node="mrow" transform="translate(220,676)">
                          <g data-mml-node="mo">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(778,0)">
                            <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                          </g>
                        </g>
                        <g data-mml-node="mn" transform="translate(609,-686)">
                          <use data-c="36" xlink:href="#MJX-1-TEX-N-36"></use>
                        </g>
                        <rect width="1478" height="60" x="120" y="220"></rect>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(7547.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(8603.6,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(9381.6,0)">
                      <g data-mml-node="mfrac">
                        <g data-mml-node="mn" transform="translate(220,676)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(220,-686)">
                          <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                        </g>
                        <rect width="700" height="60" x="120" y="220"></rect>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(10321.6,0)">
                      <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>
            <StarDivider></StarDivider>
            {`(The main thing to understand about Example
1 is that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.186ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="5.028ex"
              height="1.692ex"
              role="img"
              focusable="false"
              viewBox="0 -666 2222.4 748"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                    <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(722.2,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(1722.4,0)">
                    <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is the vertical change from `}
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
            {` to `}
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
              {`,`}
            </NoBreak>
            {` while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.566ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="8.549ex"
              height="2.262ex"
              role="img"
              focusable="false"
              viewBox="0 -750 3778.4 1000"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-34"
                  d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
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
                  <g data-mml-node="mn">
                    <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(722.2,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1722.4,0)">
                    <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2111.4,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(2889.4,0)">
                    <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3389.4,0)">
                    <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is the horizontal change from `}
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
            {` to `}
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
            {`.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sign Combinations.`}</b>
            {`
Technically, quantities such as`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.339ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.329ex"
              height="1.658ex"
              role="img"
              focusable="false"
              viewBox="0 -583 3239.6 733"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1230.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2231,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="6.958ex"
              height="1.783ex"
              role="img"
              focusable="false"
              viewBox="0 -583 3075.6 788"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1148.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2149,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`are not distances but `}
            <i>{`differences`}</i>
            {` (or,
equivalently, `}
            <i>{`changes`}</i>
            {`). A distance, by
definition, is a nonnegative number, while a
difference carries no such restriction.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`In particular, since`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.339ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="7.329ex"
              height="1.658ex"
              role="img"
              focusable="false"
              viewBox="0 -583 3239.6 733"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1230.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2231,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`can be positive or negative, while`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="6.958ex"
              height="1.783ex"
              role="img"
              focusable="false"
              viewBox="0 -583 3075.6 788"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1148.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2149,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(523,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`can be positive or negative or zero (more on
zero below), the following sign combinations
arise (lines of slope zero not included):`}</VerticalChunk>
          <div class="spacer"></div>
          <Table lines={true} cols={[120, 120, 120, 120]}>
            <tr>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.339ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="7.329ex"
                        height="1.658ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 3239.6 733"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <path
                            id="MJX-1-TEX-I-1D465"
                            d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                          <path
                            id="MJX-1-TEX-N-32"
                            d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                          <path
                            id="MJX-1-TEX-N-2212"
                            d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                            <g data-mml-node="msub">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D465"
                                  xlink:href="#MJX-1-TEX-I-1D465"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(605,-150) scale(0.707)">
                                <use
                                  data-c="32"
                                  xlink:href="#MJX-1-TEX-N-32"></use>
                              </g>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(1230.8,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(2231,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D465"
                                  xlink:href="#MJX-1-TEX-I-1D465"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(605,-150) scale(0.707)">
                                <use
                                  data-c="31"
                                  xlink:href="#MJX-1-TEX-N-31"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.464ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6.958ex"
                        height="1.783ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 3075.6 788"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <path
                            id="MJX-1-TEX-I-1D466"
                            d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                          <path
                            id="MJX-1-TEX-N-32"
                            d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                          <path
                            id="MJX-1-TEX-N-2212"
                            d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                            <g data-mml-node="msub">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D466"
                                  xlink:href="#MJX-1-TEX-I-1D466"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(523,-150) scale(0.707)">
                                <use
                                  data-c="32"
                                  xlink:href="#MJX-1-TEX-N-32"></use>
                              </g>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(1148.8,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(2149,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D466"
                                  xlink:href="#MJX-1-TEX-I-1D466"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(523,-150) scale(0.707)">
                                <use
                                  data-c="31"
                                  xlink:href="#MJX-1-TEX-N-31"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:7px; margin-bottom:7px;"
                  width={50}
                  src="/images/33.svg"></img>
              </td>
              <td>
                <MathBlock>
                  <svg
                    style="vertical-align: -1.891ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8.325ex"
                    height="4.74ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -1259 3679.6 2095"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-I-1D466"
                        d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                      <path
                        id="MJX-1-TEX-N-32"
                        d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                      <path
                        id="MJX-1-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                      <path
                        id="MJX-1-TEX-N-31"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
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
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mfrac">
                            <g
                              data-mml-node="mrow"
                              transform="translate(302,676)">
                              <g data-mml-node="msub">
                                <g data-mml-node="mi">
                                  <use
                                    data-c="1D466"
                                    xlink:href="#MJX-1-TEX-I-1D466"></use>
                                </g>
                                <g
                                  data-mml-node="mn"
                                  transform="translate(523,-150) scale(0.707)">
                                  <use
                                    data-c="32"
                                    xlink:href="#MJX-1-TEX-N-32"></use>
                                </g>
                              </g>
                              <g
                                data-mml-node="mo"
                                transform="translate(1148.8,0)">
                                <use
                                  data-c="2212"
                                  xlink:href="#MJX-1-TEX-N-2212"></use>
                              </g>
                              <g
                                data-mml-node="msub"
                                transform="translate(2149,0)">
                                <g data-mml-node="mi">
                                  <use
                                    data-c="1D466"
                                    xlink:href="#MJX-1-TEX-I-1D466"></use>
                                </g>
                                <g
                                  data-mml-node="mn"
                                  transform="translate(523,-150) scale(0.707)">
                                  <use
                                    data-c="31"
                                    xlink:href="#MJX-1-TEX-N-31"></use>
                                </g>
                              </g>
                            </g>
                            <g
                              data-mml-node="mrow"
                              transform="translate(220,-686)">
                              <g data-mml-node="msub">
                                <g data-mml-node="mi">
                                  <use
                                    data-c="1D465"
                                    xlink:href="#MJX-1-TEX-I-1D465"></use>
                                </g>
                                <g
                                  data-mml-node="mn"
                                  transform="translate(605,-150) scale(0.707)">
                                  <use
                                    data-c="32"
                                    xlink:href="#MJX-1-TEX-N-32"></use>
                                </g>
                              </g>
                              <g
                                data-mml-node="mo"
                                transform="translate(1230.8,0)">
                                <use
                                  data-c="2212"
                                  xlink:href="#MJX-1-TEX-N-2212"></use>
                              </g>
                              <g
                                data-mml-node="msub"
                                transform="translate(2231,0)">
                                <g data-mml-node="mi">
                                  <use
                                    data-c="1D465"
                                    xlink:href="#MJX-1-TEX-I-1D465"></use>
                                </g>
                                <g
                                  data-mml-node="mn"
                                  transform="translate(605,-150) scale(0.707)">
                                  <use
                                    data-c="31"
                                    xlink:href="#MJX-1-TEX-N-31"></use>
                                </g>
                              </g>
                            </g>
                            <rect
                              width="3439.6"
                              height="60"
                              x="120"
                              y="220"></rect>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
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
                            <g data-mml-node="mo">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
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
                            <g data-mml-node="mo">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:7px; margin-bottom:7px;"
                  width={105}
                  src="/images/34.svg"></img>
              </td>
              <td>
                <MathBlock>
                  <svg
                    style="vertical-align: -1.738ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.911ex"
                    height="4.586ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -1259 3496.6 2027"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mfrac">
                            <g
                              data-mml-node="mo"
                              transform="translate(220,676)">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(220,-686)">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                            <rect
                              width="978"
                              height="60"
                              x="120"
                              y="220"></rect>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1495.8,0)">
                          <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(2273.8,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2718.6,0)">
                          <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <path
                            id="MJX-1-TEX-N-2212"
                            d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        </defs>
                        <g
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          transform="scale(1,-1)">
                          <g data-mml-node="math">
                            <g data-mml-node="mo">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <path
                            id="MJX-1-TEX-N-2212"
                            d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        </defs>
                        <g
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          transform="scale(1,-1)">
                          <g data-mml-node="math">
                            <g data-mml-node="mo">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:10px; margin-bottom:4px;"
                  width={105}
                  src="/images/35.svg"></img>
              </td>
              <td>
                <MathBlock>
                  <svg
                    style="vertical-align: -1.738ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.911ex"
                    height="4.586ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -1259 3496.6 2027"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                      <path
                        id="MJX-1-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mfrac">
                            <g
                              data-mml-node="mo"
                              transform="translate(220,676)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(220,-686)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <rect
                              width="978"
                              height="60"
                              x="120"
                              y="220"></rect>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1495.8,0)">
                          <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(2273.8,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2718.6,0)">
                          <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
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
                            <g data-mml-node="mo">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <path
                            id="MJX-1-TEX-N-2212"
                            d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        </defs>
                        <g
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          transform="scale(1,-1)">
                          <g data-mml-node="math">
                            <g data-mml-node="mo">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:10px; margin-bottom:4px;"
                  width={105}
                  src="/images/36.svg"></img>
              </td>
              <td>
                <MathBlock>
                  <svg
                    style="vertical-align: -1.738ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.911ex"
                    height="4.586ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -1259 3496.6 2027"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                      <path
                        id="MJX-1-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mfrac">
                            <g
                              data-mml-node="mo"
                              transform="translate(220,676)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(220,-686)">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                            <rect
                              width="978"
                              height="60"
                              x="120"
                              y="220"></rect>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1495.8,0)">
                          <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(2273.8,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2718.6,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                          <path
                            id="MJX-1-TEX-N-2212"
                            d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        </defs>
                        <g
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          transform="scale(1,-1)">
                          <g data-mml-node="math">
                            <g data-mml-node="mo">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {``}
                  <NoBreak>
                    <Math>
                      <svg
                        style="vertical-align: -0.186ex;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.76ex"
                        height="1.505ex"
                        role="img"
                        focusable="false"
                        viewBox="0 -583 778 665"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
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
                            <g data-mml-node="mo">
                              <use
                                data-c="2B"
                                xlink:href="#MJX-1-TEX-N-2B"></use>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Math>
                  </NoBreak>
                  {``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:10px; margin-bottom:4px;"
                  width={105}
                  src="/images/37.svg"></img>
              </td>
              <td>
                <MathBlock>
                  <svg
                    style="vertical-align: -1.738ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.911ex"
                    height="4.586ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -1259 3496.6 2027"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                      <path
                        id="MJX-1-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                        <g data-mml-node="mfrac">
                          <g data-mml-node="mo" transform="translate(220,676)">
                            <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(220,-686)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <rect width="978" height="60" x="120" y="220"></rect>
                        </g>
                        <g data-mml-node="mo" transform="translate(1495.8,0)">
                          <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(2273.8,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2718.6,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </MathBlock>
              </td>
            </tr>
          </Table>
          <div class="spacer"></div>
          <VerticalChunk>
            {`In fact, we `}
            <i>{`should`}</i>
            {` be able to algebraically
verify that the slope formula gives the same
answer if `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.144ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 3157.8 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(389,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1397.6,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(1842.2,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2768.8,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
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
                  width="7.144ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 3157.8 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(389,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1397.6,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(1842.2,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2768.8,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` swap
places, or, namely, to show that the fractions`}
            <ImageRight line={3.0} src="/images/38.svg"></ImageRight>
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.891ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="33.125ex"
              height="4.74ex"
              role="img"
              focusable="false"
              viewBox="0 -1259 14641.1 2095"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-64"
                  d="M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(3679.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(5679.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(5846.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6013.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6180.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6347.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mtext" transform="translate(6514.6,0)">
                    <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(500,0)"></use>
                    <use
                      data-c="64"
                      xlink:href="#MJX-1-TEX-N-64"
                      transform="translate(1056,0)"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8126.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8293.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8460.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8627.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8794.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8961.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(10961.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`are somehow equal. But, indeed,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -2.172ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="34.529ex"
              height="5.475ex"
              role="img"
              focusable="false"
              viewBox="0 -1460 15261.8 2420"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
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
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3957.3,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(5013.1,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,710)">
                        <g data-mml-node="mo">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(778,0)">
                          <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(1167,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2315.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(3316,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(4242.6,0)">
                          <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-710)">
                        <g data-mml-node="mo">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(778,0)">
                          <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(1167,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2397.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(3398,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(4406.6,0)">
                          <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                        </g>
                      </g>
                      <rect width="4995.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(10526.4,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(11582.2,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <ImageLeft offset_y="-3.5rem" src="/images/39.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`which verifies this hypothesis. In particular,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.891ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="33.125ex"
              height="4.74ex"
              role="img"
              focusable="false"
              viewBox="0 -1259 14641.1 2095"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-64"
                  d="M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(3679.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(5679.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(5846.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6013.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6180.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6347.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mtext" transform="translate(6514.6,0)">
                    <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(500,0)"></use>
                    <use
                      data-c="64"
                      xlink:href="#MJX-1-TEX-N-64"
                      transform="translate(1056,0)"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8126.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8293.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8460.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8627.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8794.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8961.6,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(10961.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(302,676)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1148.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2149,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="msub">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1230.8,0)">
                          <use
                            data-c="2212"
                            xlink:href="#MJX-1-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(2231,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                        </g>
                      </g>
                      <rect width="3439.6" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`are equally valid incarnations of the slope
formula.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Pathological Cases.`}</b>
            {`
If`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.339ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.478ex"
              height="1.846ex"
              role="img"
              focusable="false"
              viewBox="0 -666 5073.1 816"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1230.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2231,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3517.3,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(4573.1,0)">
                    <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`the slope formula “breaks down” in the sense that
division by 0 is undefined. This occurs, e.g., if
we attempt to measure the slope of a vertical
line:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/40.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {`Indeed, vertical lines have `}
            <i>{`undefined`}</i>
            {` slope.
Moreover the bad case`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.339ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="11.478ex"
              height="1.846ex"
              role="img"
              focusable="false"
              viewBox="0 -666 5073.1 816"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1230.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(2231,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g
                      data-mml-node="mn"
                      transform="translate(605,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3517.3,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(4573.1,0)">
                    <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`can also occur another way, namely if the points
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.144ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 3157.8 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(389,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1397.6,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(1842.2,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2768.8,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
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
                  width="7.144ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 3157.8 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(389,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1397.6,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(1842.2,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2768.8,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` coincide. In that
case, more precisely, the slope formula evaluates
to`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.891ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="13.469ex"
              height="4.928ex"
              role="img"
              focusable="false"
              viewBox="0 -1342 5953.1 2178"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-32"
                  d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                  <g data-mml-node="mfrac">
                    <g data-mml-node="mrow" transform="translate(302,676)">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1148.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2149,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                    </g>
                    <g data-mml-node="mrow" transform="translate(220,-686)">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1230.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2231,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                    </g>
                    <rect width="3439.6" height="60" x="120" y="220"></rect>
                  </g>
                  <g data-mml-node="mo" transform="translate(3957.3,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mfrac" transform="translate(5013.1,0)">
                    <g data-mml-node="mn" transform="translate(220,676)">
                      <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(220,-686)">
                      <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                    </g>
                    <rect width="700" height="60" x="120" y="220"></rect>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which could be anything. (Technically, “`}
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
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
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
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(500,0)">
                        <g data-mml-node="mo">
                          <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                        </g>
                      </g>
                      <g data-mml-node="mn" transform="translate(1000,0)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` is
undefined.) Indeed, infinitely many different
lines pass through any given point!`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`“Rise over Run”.`}</b>
            {`
Some people remember the slope formula as “slope
equals rise over run” (i.e., “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.439ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.303ex"
                  height="2.009ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 3227.8 888"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                    <path
                      id="MJX-1-TEX-N-6C"
                      d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                    <path
                      id="MJX-1-TEX-N-6F"
                      d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                    <path
                      id="MJX-1-TEX-N-70"
                      d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                    <path
                      id="MJX-1-TEX-N-65"
                      d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
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
                      <g data-mml-node="mtext">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                        <use
                          data-c="6C"
                          xlink:href="#MJX-1-TEX-N-6C"
                          transform="translate(394,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(672,0)"></use>
                        <use
                          data-c="70"
                          xlink:href="#MJX-1-TEX-N-70"
                          transform="translate(1172,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1728,0)"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(2449.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {``}
            <InlineImage
              space_right={true}
              width="28px"
              src="/images/rise-run.svg"></InlineImage>
            {`”), following such a picture:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image class="pt-4 mb-4" width="300px" src="/images/44.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`In this context, note that, in physics, a
one-dimensional displacement is measured as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -2.148ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="32.653ex"
              height="5.428ex"
              role="img"
              focusable="false"
              viewBox="0 -1449.5 14432.4 2399"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-S3-28"
                  d="M701 -940Q701 -943 695 -949H664Q662 -947 636 -922T591 -879T537 -818T475 -737T412 -636T350 -511T295 -362T250 -186T221 17T209 251Q209 962 573 1361Q596 1386 616 1405T649 1437T664 1450H695Q701 1444 701 1441Q701 1436 681 1415T629 1356T557 1261T476 1118T400 927T340 675T308 359Q306 321 306 250Q306 -139 400 -430T690 -924Q701 -936 701 -940Z"></path>
                <path
                  id="MJX-1-TEX-N-63"
                  d="M370 305T349 305T313 320T297 358Q297 381 312 396Q317 401 317 402T307 404Q281 408 258 408Q209 408 178 376Q131 329 131 219Q131 137 162 90Q203 29 272 29Q313 29 338 55T374 117Q376 125 379 127T395 129H409Q415 123 415 120Q415 116 411 104T395 71T366 33T318 2T249 -11Q163 -11 99 53T34 214Q34 318 99 383T250 448T370 421T404 357Q404 334 387 320Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-64"
                  d="M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-74"
                  d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path id="MJX-1-TEX-N-20" d=""></path>
                <path
                  id="MJX-1-TEX-N-76"
                  d="M338 431Q344 429 422 429Q479 429 503 431H508V385H497Q439 381 423 345Q421 341 356 172T288 -2Q283 -11 263 -11Q244 -11 239 -2Q99 359 98 364Q93 378 82 381T43 385H19V431H25L33 430Q41 430 53 430T79 430T104 429T122 428Q217 428 232 431H240V385H226Q187 384 184 370Q184 366 235 234L286 102L377 341V349Q377 363 367 372T349 383T335 385H331V431H338Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-S3-29"
                  d="M34 1438Q34 1446 37 1448T50 1450H56H71Q73 1448 99 1423T144 1380T198 1319T260 1238T323 1137T385 1013T440 864T485 688T514 485T526 251Q526 134 519 53Q472 -519 162 -860Q139 -885 119 -904T86 -936T71 -949H56Q43 -949 39 -947T34 -937Q88 -883 140 -813Q428 -430 428 251Q428 453 402 628T338 922T245 1146T145 1309T46 1425Q44 1427 42 1429T39 1433T36 1436L34 1438Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mrow">
                    <g data-mml-node="mo" transform="translate(0 -0.5)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-S3-28"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(736,0)">
                      <g data-mml-node="mfrac">
                        <g data-mml-node="mtext" transform="translate(120,676)">
                          <use data-c="63" xlink:href="#MJX-1-TEX-N-63"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(444,0)"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(944,0)"></use>
                          <use
                            data-c="72"
                            xlink:href="#MJX-1-TEX-N-72"
                            transform="translate(1444,0)"></use>
                          <use
                            data-c="64"
                            xlink:href="#MJX-1-TEX-N-64"
                            transform="translate(1836,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(2392,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2670,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(3226,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(3726,0)"></use>
                          <use
                            data-c="65"
                            xlink:href="#MJX-1-TEX-N-65"
                            transform="translate(4115,0)"></use>
                        </g>
                        <g
                          data-mml-node="mtext"
                          transform="translate(396,-686)">
                          <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(889,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(1139,0)"></use>
                          <use
                            data-c="72"
                            xlink:href="#MJX-1-TEX-N-72"
                            transform="translate(1639,0)"></use>
                          <use
                            data-c="72"
                            xlink:href="#MJX-1-TEX-N-72"
                            transform="translate(2031,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(2423,0)"></use>
                          <use
                            data-c="76"
                            xlink:href="#MJX-1-TEX-N-76"
                            transform="translate(2701,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(3229,0)"></use>
                          <use
                            data-c="6C"
                            xlink:href="#MJX-1-TEX-N-6C"
                            transform="translate(3729,0)"></use>
                        </g>
                      </g>
                    </g>
                    <g
                      data-mml-node="mo"
                      transform="translate(5535,0) translate(0 -0.5)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-S3-29"></use>
                    </g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6271,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6438,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mo" transform="translate(6827.2,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(7605.2,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(7772.2,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mrow" transform="translate(8161.4,0)">
                    <g data-mml-node="mo" transform="translate(0 -0.5)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-S3-28"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(736,0)">
                      <g data-mml-node="mfrac">
                        <g data-mml-node="mtext" transform="translate(120,676)">
                          <use data-c="63" xlink:href="#MJX-1-TEX-N-63"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(444,0)"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(944,0)"></use>
                          <use
                            data-c="72"
                            xlink:href="#MJX-1-TEX-N-72"
                            transform="translate(1444,0)"></use>
                          <use
                            data-c="64"
                            xlink:href="#MJX-1-TEX-N-64"
                            transform="translate(1836,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(2392,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2670,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(3226,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(3726,0)"></use>
                          <use
                            data-c="65"
                            xlink:href="#MJX-1-TEX-N-65"
                            transform="translate(4115,0)"></use>
                        </g>
                        <g
                          data-mml-node="mtext"
                          transform="translate(798,-686)">
                          <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(889,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(1139,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(1533,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(1922,0)"></use>
                          <use
                            data-c="72"
                            xlink:href="#MJX-1-TEX-N-72"
                            transform="translate(2422,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(2814,0)"></use>
                        </g>
                      </g>
                    </g>
                    <g
                      data-mml-node="mo"
                      transform="translate(5535,0) translate(0 -0.5)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-S3-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`in accordance, namely, with the coordinate
differences “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.339ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.951ex"
                  height="1.658ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 3072.6 733"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1230.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2231,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(3239.6,0)">
                        <g data-mml-node="mspace"></g>
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
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.58ex"
                  height="1.783ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 2908.6 788"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1148.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2149,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(3075.6,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`”
that appear in the slope formula.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{`(In order not to discriminate, maybe we should
also include this picture:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image class="pt-4 mb-4" src="/images/47.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`Then “rise” and “run” have their signs flipped,
but the ratio rise-over-run is the same, as
already mentioned.)`}</VerticalChunk>
          <VerticalChunk indent={true}>
            <Pause></Pause>
            {``}
            <i>{`An Additional Miscellaneous Notation.`}</i>
            {`
The slope formula is occasionally written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.577ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="12.105ex"
              height="4.726ex"
              role="img"
              focusable="false"
              viewBox="0 -1392 5350.6 2089"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-394"
                  d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z"></path>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2449.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mfrac" transform="translate(3505.6,0)">
                    <g data-mml-node="mrow" transform="translate(261,676)">
                      <g data-mml-node="mi">
                        <use data-c="394" xlink:href="#MJX-1-TEX-N-394"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(833,0)">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                    <g data-mml-node="mrow" transform="translate(220,-686)">
                      <g data-mml-node="mi">
                        <use data-c="394" xlink:href="#MJX-1-TEX-N-394"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(833,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                    <rect width="1605" height="60" x="120" y="220"></rect>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`where the foreign-looking symbols `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.025ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.179ex"
                  height="1.645ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 1405 727"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-394"
                      d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z"></path>
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
                        <use data-c="394" xlink:href="#MJX-1-TEX-N-394"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(833,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`,
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.993ex"
                  height="2.084ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -716 1323 921"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-394"
                      d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="394" xlink:href="#MJX-1-TEX-N-394"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(833,0)">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` can be thought of as shorthands for
“`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.339ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.329ex"
                  height="1.658ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 3239.6 733"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1230.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2231,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
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
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.958ex"
                  height="1.783ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 3075.6 788"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1148.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2149,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` respectively. (Or,
a little more exactly, as shorthands for the
phrases “change in `}
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
              {`”,`}
            </NoBreak>
            {` “change in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`”.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Solving for “rise” and “run”.`}</b>
            {`
Multiplying`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.577ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="12.338ex"
              height="4.62ex"
              role="img"
              focusable="false"
              viewBox="0 -1345 5453.6 2042"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2449.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(3505.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mtext" transform="translate(220,676)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="73"
                          xlink:href="#MJX-1-TEX-N-73"
                          transform="translate(670,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1064,0)"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(222,-686)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="75"
                          xlink:href="#MJX-1-TEX-N-75"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(948,0)"></use>
                      </g>
                      <rect width="1708" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`on each side by “run” gives`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.439ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="17.511ex"
              height="2.009ex"
              role="img"
              focusable="false"
              viewBox="0 -694 7740 888"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-D7"
                  d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2394.2,0)">
                    <use data-c="D7" xlink:href="#MJX-1-TEX-N-D7"></use>
                  </g>
                  <g data-mml-node="mtext" transform="translate(3394.4,0)">
                    <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                    <use
                      data-c="75"
                      xlink:href="#MJX-1-TEX-N-75"
                      transform="translate(392,0)"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(948,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(5176.2,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mtext" transform="translate(6232,0)">
                    <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                    <use
                      data-c="69"
                      xlink:href="#MJX-1-TEX-N-69"
                      transform="translate(392,0)"></use>
                    <use
                      data-c="73"
                      xlink:href="#MJX-1-TEX-N-73"
                      transform="translate(670,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1064,0)"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`or “rise equals slope times run”. After which,
dividing each side by “slope”, we find`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.991ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="12.329ex"
              height="5.034ex"
              role="img"
              focusable="false"
              viewBox="0 -1345 5449.6 2225"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mtext">
                    <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                    <use
                      data-c="75"
                      xlink:href="#MJX-1-TEX-N-75"
                      transform="translate(392,0)"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(948,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1781.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(2837.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mtext" transform="translate(552,676)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="73"
                          xlink:href="#MJX-1-TEX-N-73"
                          transform="translate(670,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1064,0)"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(220,-686)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                        <use
                          data-c="6C"
                          xlink:href="#MJX-1-TEX-N-6C"
                          transform="translate(394,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(672,0)"></use>
                        <use
                          data-c="70"
                          xlink:href="#MJX-1-TEX-N-70"
                          transform="translate(1172,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1728,0)"></use>
                      </g>
                      <rect width="2372" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`or “run equals rise over slope”. Thus:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/48.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`...as can sometimes be useful to know.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Slopes and Line Equations.`}</b>
            {` An equation of the
form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="10.353ex"
              height="2.034ex"
              role="img"
              focusable="false"
              viewBox="0 -694 4576 899"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44E"
                  d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(767.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1823.6,0)">
                    <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(2352.6,0)">
                    <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3146.8,0)">
                    <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4147,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`where `}
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
            </NoBreak>
            {` and `}
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
            </NoBreak>
            {` are constants defines a line in
the Cartesian plane. E.g.:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image width="640px" src="/images/49.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {`Note that, assuming said `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.353ex"
                  height="2.034ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 4576 899"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(767.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1823.6,0)">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2352.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3146.8,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4147,0)">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` one has`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="15.812ex"
              height="2.034ex"
              role="img"
              focusable="false"
              viewBox="0 -694 6989 899"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44E"
                  d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path
                  id="MJX-1-TEX-N-22C5"
                  d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path>
                <path
                  id="MJX-1-TEX-N-30"
                  d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(767.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1823.6,0)">
                    <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2574.8,0)">
                    <use data-c="22C5" xlink:href="#MJX-1-TEX-N-22C5"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(3075,0)">
                    <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3797.2,0)">
                    <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4797.4,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(5504.2,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(6560,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`at `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.442ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2405.6 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1905.6,0)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` so `}
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
            </NoBreak>
            {` is the height of the line at
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.442ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2405.6 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1905.6,0)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.`}
            </NoBreak>
            {` (FYI, this height is called the`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`-intercept`}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`of the line, because `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.442ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2405.6 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1905.6,0)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` is where the line
crosses the `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` axis. But the point`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.566ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="4.868ex"
              height="2.262ex"
              role="img"
              focusable="false"
              viewBox="0 -750 2151.7 1000"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-28"
                  d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                <path
                  id="MJX-1-TEX-N-30"
                  d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                  <g data-mml-node="mo">
                    <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(389,0)">
                    <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(889,0)">
                    <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1333.7,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1762.7,0)">
                    <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`is also sometimes called the`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`-intercept`}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`of the line, so the term “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`-intercept”`}
            </NoBreak>
            {` might
either refer to the value `}
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
            </NoBreak>
            {` or to the point
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4.868ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2151.7 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(389,0)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(889,0)">
                        <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1333.7,0)">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1762.7,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` depending.) On the other hand, at
`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.442ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2405.6 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1905.6,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`,`}
            </NoBreak>
            {` we have`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="19.775ex"
              height="2.034ex"
              role="img"
              focusable="false"
              viewBox="0 -694 8740.4 899"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44E"
                  d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path
                  id="MJX-1-TEX-N-22C5"
                  d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"></path>
                <path
                  id="MJX-1-TEX-N-31"
                  d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(767.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1823.6,0)">
                    <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2574.8,0)">
                    <use data-c="22C5" xlink:href="#MJX-1-TEX-N-22C5"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(3075,0)">
                    <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3797.2,0)">
                    <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4797.4,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(5504.2,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(6560,0)">
                    <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(7311.2,0)">
                    <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(8311.4,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`so `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` increases by `}
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
            </NoBreak>
            {` between `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.442ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2405.6 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1905.6,0)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
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
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.442ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 2405.6 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1905.6,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`.`}
            </NoBreak>
            {` In fact, `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` increases by `}
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
            </NoBreak>
            {` each time
`}
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
            {` increases by 1, so, by our own definition of
slope—the increase in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` per unit increase in
`}
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
            {`—`}
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
            </NoBreak>
            {` is the slope of `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.353ex"
                  height="2.034ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 4576 899"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(767.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1823.6,0)">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2352.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3146.8,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4147,0)">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {``}
              <b>{`Example 2.`}</b>
              {`
The equation`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -0.464ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="12.71ex"
                height="1.971ex"
                role="img"
                focusable="false"
                viewBox="0 -666 5618 871"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-I-1D466"
                    d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                  <path
                    id="MJX-1-TEX-N-31"
                    d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                  <path
                    id="MJX-1-TEX-N-30"
                    d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  <path
                    id="MJX-1-TEX-I-1D465"
                    d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                  <path
                    id="MJX-1-TEX-N-2212"
                    d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                    <g data-mml-node="mi">
                      <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(767.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(1823.6,0)">
                      <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      <use
                        data-c="30"
                        xlink:href="#MJX-1-TEX-N-30"
                        transform="translate(500,0)"></use>
                      <use
                        data-c="30"
                        xlink:href="#MJX-1-TEX-N-30"
                        transform="translate(1000,0)"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(3323.6,0)">
                      <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4117.8,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(5118,0)">
                      <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`defines a line of slope 100.`}</VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>{`On the other hand, an equation of the form`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="10.353ex"
              height="2.034ex"
              role="img"
              focusable="false"
              viewBox="0 -694 4576 899"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-I-1D44E"
                  d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(767.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1823.6,0)">
                    <use data-c="1D44E" xlink:href="#MJX-1-TEX-I-1D44E"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(2352.6,0)">
                    <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3146.8,0)">
                    <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4147,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`cannot describe a vertical line, because `}
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
            </NoBreak>
            {` is
the slope, while a vertical line has no slope, so
what would `}
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
            </NoBreak>
            {` be equal to? Instead, a vertical
line is described by an equation of the form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.186ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="5.291ex"
              height="1.505ex"
              role="img"
              focusable="false"
              viewBox="0 -583 2338.6 665"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-I-1D450"
                  d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(849.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1905.6,0)">
                    <use data-c="1D450" xlink:href="#MJX-1-TEX-I-1D450"></use>
                  </g>
                </g>
              </g>
            </svg>
            <ImageLeft
              use_squiggle_on_mobile={false}
              offset_x="4rem"
              offset_y="1rem"
              src="/images/svg_vertical_line_equation.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`(see Fig. 1) where `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.09ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.379ex"
                  height="1.636ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -683 2377.6 723"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D450"
                      d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path>
                    <path
                      id="MJX-1-TEX-N-2208"
                      d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D450"
                          xlink:href="#MJX-1-TEX-I-1D450"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(710.8,0)">
                        <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1655.6,0)">
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
            {` is a constant, 
similarly to the more familiar equation`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="5.096ex"
              height="2.034ex"
              role="img"
              focusable="false"
              viewBox="0 -694 2252.6 899"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(767.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1823.6,0)">
                    <use data-c="1D44F" xlink:href="#MJX-1-TEX-I-1D44F"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`for a horizontal line, where `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.09ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.37ex"
                  height="1.661ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 2373.6 734"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D44F"
                      d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>
                    <path
                      id="MJX-1-TEX-N-2208"
                      d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(706.8,0)">
                        <use data-c="2208" xlink:href="#MJX-1-TEX-N-2208"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1651.6,0)">
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
            {` is a
constant.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`One should also keep in mind that an equation can
define a line without having either of the forms
“`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.353ex"
                  height="2.034ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 4576 899"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(767.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1823.6,0)">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2352.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3146.8,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4147,0)">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”`}
            </NoBreak>
            {` or “`}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.291ex"
                  height="1.505ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 2338.6 665"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D450"
                      d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path>
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
                      <g data-mml-node="mo" transform="translate(849.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1905.6,0)">
                        <use
                          data-c="1D450"
                          xlink:href="#MJX-1-TEX-I-1D450"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`”.`}
            </NoBreak>
            {` For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="9.317ex"
              height="1.968ex"
              role="img"
              focusable="false"
              viewBox="0 -665 4118 870"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-2B"
                  d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                  <g data-mml-node="mi">
                    <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(794.2,0)">
                    <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1794.4,0)">
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2562.2,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(3618,0)">
                    <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`is equivalent to`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -0.464ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="9.317ex"
              height="1.968ex"
              role="img"
              focusable="false"
              viewBox="0 -665 4118 870"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-33"
                  d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                <path
                  id="MJX-1-TEX-N-2212"
                  d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                    <use data-c="1D466" xlink:href="#MJX-1-TEX-I-1D466"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(767.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(1823.6,0)">
                    <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2545.8,0)">
                    <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(3546,0)">
                    <use data-c="1D465" xlink:href="#MJX-1-TEX-I-1D465"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and thus describes a line of `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`-intercept`}
            </NoBreak>
            {` `}
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
            {`
and slope `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.186ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.891ex"
                  height="1.692ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -666 1278 748"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                      <g data-mml-node="mo">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(778,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`.`}
            <ImageRight
              offset_x="2rem"
              line={1.0}
              src="/images/svg_3_plus_minus_one_times_x_cloud.svg"></ImageRight>
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Slopes and Units.`}</b>
            {`
If the `}
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
              {`-`}
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`-axes`}
            </NoBreak>
            {` have units then a line's
slope has units`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.577ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="12.183ex"
              height="4.62ex"
              role="img"
              focusable="false"
              viewBox="0 -1345 5385 2042"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-1-TEX-N-A0" d=""></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-78"
                  d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path id="MJX-1-TEX-N-20" d=""></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-74"
                  d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
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
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(261,676)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                        <g data-mml-node="mtext" transform="translate(490,0)">
                          <use data-c="A0" xlink:href="#MJX-1-TEX-N-A0"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(250,0)"></use>
                          <use
                            data-c="78"
                            xlink:href="#MJX-1-TEX-N-78"
                            transform="translate(750,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(1278,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(1556,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(1950,0)"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(2200,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2756,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(3312,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(3590,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(3979,0)"></use>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                        </g>
                        <g data-mml-node="mtext" transform="translate(572,0)">
                          <use data-c="A0" xlink:href="#MJX-1-TEX-N-A0"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(250,0)"></use>
                          <use
                            data-c="78"
                            xlink:href="#MJX-1-TEX-N-78"
                            transform="translate(750,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(1278,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(1556,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(1950,0)"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(2200,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2756,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(3312,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(3590,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(3979,0)"></use>
                        </g>
                      </g>
                      <rect width="5145" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as should make sense, given that the slope is a
change in `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` divided by a change in `}
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
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`For example, if the units on the `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` axis are
meters (“m”) and the units on the `}
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
            {` axis are
seconds (“s”) then the slope has units`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.577ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="18.08ex"
              height="4.62ex"
              role="img"
              focusable="false"
              viewBox="0 -1345 7991.6 2042"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-I-1D466"
                  d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                <path id="MJX-1-TEX-N-A0" d=""></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-78"
                  d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path id="MJX-1-TEX-N-20" d=""></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-74"
                  d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
                <path
                  id="MJX-1-TEX-I-1D465"
                  d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-6D"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(261,676)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                        <g data-mml-node="mtext" transform="translate(490,0)">
                          <use data-c="A0" xlink:href="#MJX-1-TEX-N-A0"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(250,0)"></use>
                          <use
                            data-c="78"
                            xlink:href="#MJX-1-TEX-N-78"
                            transform="translate(750,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(1278,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(1556,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(1950,0)"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(2200,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2756,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(3312,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(3590,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(3979,0)"></use>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-686)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                        </g>
                        <g data-mml-node="mtext" transform="translate(572,0)">
                          <use data-c="A0" xlink:href="#MJX-1-TEX-N-A0"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(250,0)"></use>
                          <use
                            data-c="78"
                            xlink:href="#MJX-1-TEX-N-78"
                            transform="translate(750,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(1278,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(1556,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(1950,0)"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(2200,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2756,0)"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(3312,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(3590,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(3979,0)"></use>
                        </g>
                      </g>
                      <rect width="5145" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(5662.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(6718.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mtext" transform="translate(220,676)">
                        <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                      </g>
                      <g
                        data-mml-node="mtext"
                        transform="translate(439.5,-686)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                      </g>
                      <rect width="1033" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`also known as `}
            <i>{`meters per second`}</i>
            {`. This is
precisely the case, for example, in the following
graph, that purports to plot the height of a
balloon, in meters, as a function of time elapsed,
in seconds:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image class="mt-[1.4em] mb-[1.2em]" src="/images/52.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {`The slope of the graph is `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.05ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4.023ex"
                  height="1.579ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -676 1778 698"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-2E"
                      d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                    <path
                      id="MJX-1-TEX-N-37"
                      d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>
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
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        <use
                          data-c="2E"
                          xlink:href="#MJX-1-TEX-N-2E"
                          transform="translate(500,0)"></use>
                        <use
                          data-c="37"
                          xlink:href="#MJX-1-TEX-N-37"
                          transform="translate(778,0)"></use>
                        <use
                          data-c="35"
                          xlink:href="#MJX-1-TEX-N-35"
                          transform="translate(1278,0)"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` `}
            <i>{`meters per
second`}</i>
            {` because the balloon's height increases by
three `}
            <i>{`meters`}</i>
            {` over the first four `}
            <i>{`seconds`}</i>
            {` (if
you had noticed):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -2.148ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="33.015ex"
              height="5.428ex"
              role="img"
              focusable="false"
              viewBox="0 -1449.5 14592.6 2399"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-S3-28"
                  d="M701 -940Q701 -943 695 -949H664Q662 -947 636 -922T591 -879T537 -818T475 -737T412 -636T350 -511T295 -362T250 -186T221 17T209 251Q209 962 573 1361Q596 1386 616 1405T649 1437T664 1450H695Q701 1444 701 1441Q701 1436 681 1415T629 1356T557 1261T476 1118T400 927T340 675T308 359Q306 321 306 250Q306 -139 400 -430T690 -924Q701 -936 701 -940Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-S3-29"
                  d="M34 1438Q34 1446 37 1448T50 1450H56H71Q73 1448 99 1423T144 1380T198 1319T260 1238T323 1137T385 1013T440 864T485 688T514 485T526 251Q526 134 519 53Q472 -519 162 -860Q139 -885 119 -904T86 -936T71 -949H56Q43 -949 39 -947T34 -937Q88 -883 140 -813Q428 -430 428 251Q428 453 402 628T338 922T245 1146T145 1309T46 1425Q44 1427 42 1429T39 1433T36 1436L34 1438Z"></path>
                <path
                  id="MJX-1-TEX-N-33"
                  d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path>
                <path
                  id="MJX-1-TEX-N-6D"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-34"
                  d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                <path
                  id="MJX-1-TEX-N-30"
                  d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                <path
                  id="MJX-1-TEX-N-2E"
                  d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                <path
                  id="MJX-1-TEX-N-37"
                  d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>
                <path
                  id="MJX-1-TEX-N-35"
                  d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                <path
                  id="MJX-1-TEX-N-2F"
                  d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mrow" transform="translate(2338.7,0)">
                    <g data-mml-node="mo" transform="translate(0 -0.5)">
                      <use data-c="28" xlink:href="#MJX-1-TEX-S3-28"></use>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(736,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mo" transform="translate(569,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(1624.8,0)">
                      <g data-mml-node="mfrac">
                        <g data-mml-node="mtext" transform="translate(220,676)">
                          <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                          <use
                            data-c="69"
                            xlink:href="#MJX-1-TEX-N-69"
                            transform="translate(392,0)"></use>
                          <use
                            data-c="73"
                            xlink:href="#MJX-1-TEX-N-73"
                            transform="translate(670,0)"></use>
                          <use
                            data-c="65"
                            xlink:href="#MJX-1-TEX-N-65"
                            transform="translate(1064,0)"></use>
                        </g>
                        <g
                          data-mml-node="mtext"
                          transform="translate(222,-686)">
                          <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(392,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(948,0)"></use>
                        </g>
                        <rect width="1708" height="60" x="120" y="220"></rect>
                      </g>
                    </g>
                    <g
                      data-mml-node="mo"
                      transform="translate(3572.8,0) translate(0 -0.5)">
                      <use data-c="29" xlink:href="#MJX-1-TEX-S3-29"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(6925.2,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(7981,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(220,676)">
                        <g data-mml-node="mn">
                          <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                        </g>
                        <g data-mml-node="mtext" transform="translate(500,0)">
                          <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(439.5,-686)">
                        <g data-mml-node="mn">
                          <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                        </g>
                        <g data-mml-node="mtext" transform="translate(500,0)">
                          <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                        </g>
                      </g>
                      <rect width="1533" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(10031.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(11087.6,0)">
                    <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                    <use
                      data-c="2E"
                      xlink:href="#MJX-1-TEX-N-2E"
                      transform="translate(500,0)"></use>
                    <use
                      data-c="37"
                      xlink:href="#MJX-1-TEX-N-37"
                      transform="translate(778,0)"></use>
                    <use
                      data-c="35"
                      xlink:href="#MJX-1-TEX-N-35"
                      transform="translate(1278,0)"></use>
                  </g>
                  <g data-mml-node="mtext" transform="translate(12865.6,0)">
                    <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(13698.6,0)">
                    <g data-mml-node="mo">
                      <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                    </g>
                  </g>
                  <g data-mml-node="mtext" transform="translate(14198.6,0)">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`In fact, the slope is the balloon's upward`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`velocity`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`since velocity is defined as`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`displacement over time`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`and this is precisely the form of the ratio “rise
over run” for the current graph. (More generally,
we have`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CenterDisplay>{`“slope = velocity”`}</CenterDisplay>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`whenever the `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {` axis has dimensions of length and
the `}
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
            {` axis has dimensions of time—whether the
slope turns out to be `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.907ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 1727 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-6D"
                      d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                    <path
                      id="MJX-1-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                    <path
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mtext">
                        <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(833,0)">
                        <g data-mml-node="mo">
                          <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                        </g>
                      </g>
                      <g data-mml-node="mtext" transform="translate(1333,0)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
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
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.102ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 2255 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-6B"
                      d="M36 46H50Q89 46 97 60V68Q97 77 97 91T97 124T98 167T98 217T98 272T98 329Q98 366 98 407T98 482T98 542T97 586T97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V463L180 233L240 287Q300 341 304 347Q310 356 310 364Q310 383 289 385H284V431H293Q308 428 412 428Q475 428 484 431H489V385H476Q407 380 360 341Q286 278 286 274Q286 273 349 181T420 79Q434 60 451 53T500 46H511V0H505Q496 3 418 3Q322 3 307 0H299V46H306Q330 48 330 65Q330 72 326 79Q323 84 276 153T228 222L176 176V120V84Q176 65 178 59T189 49Q210 46 238 46H254V0H246Q231 3 137 3T28 0H20V46H36Z"></path>
                    <path
                      id="MJX-1-TEX-N-6D"
                      d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                    <path
                      id="MJX-1-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                    <path
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mtext">
                        <use data-c="6B" xlink:href="#MJX-1-TEX-N-6B"></use>
                        <use
                          data-c="6D"
                          xlink:href="#MJX-1-TEX-N-6D"
                          transform="translate(528,0)"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1361,0)">
                        <g data-mml-node="mo">
                          <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                        </g>
                      </g>
                      <g data-mml-node="mtext" transform="translate(1861,0)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
            </NoBreak>
            {`
or km/hour, etc, depends on the exact units involved.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`Terminology-wise, slopes are often known as`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`rates of change`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`in the presence of units. More particularly, in the
common case when the `}
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
              {`-axis`}
            </NoBreak>
            {` denotes time, the
formula`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.577ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="12.338ex"
              height="4.62ex"
              role="img"
              focusable="false"
              viewBox="0 -1345 5453.6 2042"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-73"
                  d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                <path
                  id="MJX-1-TEX-N-6C"
                  d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-70"
                  d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mtext">
                    <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    <use
                      data-c="6C"
                      xlink:href="#MJX-1-TEX-N-6C"
                      transform="translate(394,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(672,0)"></use>
                    <use
                      data-c="70"
                      xlink:href="#MJX-1-TEX-N-70"
                      transform="translate(1172,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1728,0)"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2449.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(3505.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mtext" transform="translate(220,676)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="73"
                          xlink:href="#MJX-1-TEX-N-73"
                          transform="translate(670,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1064,0)"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(222,-686)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="75"
                          xlink:href="#MJX-1-TEX-N-75"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(948,0)"></use>
                      </g>
                      <rect width="1708" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`can be rephrased as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            <svg
              style="vertical-align: -1.577ex;"
              xmlns="http://www.w3.org/2000/svg"
              width="39.205ex"
              height="4.701ex"
              role="img"
              focusable="false"
              viewBox="0 -1381 17328.6 2078"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  id="MJX-1-TEX-N-2035"
                  d="M12 501Q12 527 31 542T63 558Q73 560 77 560Q114 560 128 528Q133 518 188 293T244 61Q244 56 223 50T195 43Q192 43 190 45T102 263T14 486Q12 496 12 501Z"></path>
                <path
                  id="MJX-1-TEX-N-72"
                  d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                <path
                  id="MJX-1-TEX-N-61"
                  d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                <path
                  id="MJX-1-TEX-N-74"
                  d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
                <path
                  id="MJX-1-TEX-N-65"
                  d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                <path id="MJX-1-TEX-N-20" d=""></path>
                <path
                  id="MJX-1-TEX-N-6F"
                  d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                <path
                  id="MJX-1-TEX-N-66"
                  d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z"></path>
                <path
                  id="MJX-1-TEX-N-63"
                  d="M370 305T349 305T313 320T297 358Q297 381 312 396Q317 401 317 402T307 404Q281 408 258 408Q209 408 178 376Q131 329 131 219Q131 137 162 90Q203 29 272 29Q313 29 338 55T374 117Q376 125 379 127T395 129H409Q415 123 415 120Q415 116 411 104T395 71T366 33T318 2T249 -11Q163 -11 99 53T34 214Q34 318 99 383T250 448T370 421T404 357Q404 334 387 320Z"></path>
                <path
                  id="MJX-1-TEX-N-68"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 124T102 167T103 217T103 272T103 329Q103 366 103 407T103 482T102 542T102 586T102 603Q99 622 88 628T43 637H25V660Q25 683 27 683L37 684Q47 685 66 686T103 688Q120 689 140 690T170 693T181 694H184V367Q244 442 328 442Q451 442 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-6E"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-67"
                  d="M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z"></path>
                <path
                  id="MJX-1-TEX-N-3D"
                  d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                <path
                  id="MJX-1-TEX-N-6D"
                  d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                <path
                  id="MJX-1-TEX-N-75"
                  d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                <path
                  id="MJX-1-TEX-N-69"
                  d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                <path
                  id="MJX-1-TEX-N-2032"
                  d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path>
              </defs>
              <g
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mo">
                    <g data-c="2036">
                      <use data-c="2035" xlink:href="#MJX-1-TEX-N-2035"></use>
                      <use
                        data-c="2035"
                        xlink:href="#MJX-1-TEX-N-2035"
                        transform="translate(275,0)"></use>
                    </g>
                  </g>
                  <g data-mml-node="mspace" transform="translate(550,0)"></g>
                  <g data-mml-node="mtext" transform="translate(650,0)">
                    <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                    <use
                      data-c="61"
                      xlink:href="#MJX-1-TEX-N-61"
                      transform="translate(392,0)"></use>
                    <use
                      data-c="74"
                      xlink:href="#MJX-1-TEX-N-74"
                      transform="translate(892,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(1281,0)"></use>
                    <use
                      data-c="20"
                      xlink:href="#MJX-1-TEX-N-20"
                      transform="translate(1725,0)"></use>
                    <use
                      data-c="6F"
                      xlink:href="#MJX-1-TEX-N-6F"
                      transform="translate(1975,0)"></use>
                    <use
                      data-c="66"
                      xlink:href="#MJX-1-TEX-N-66"
                      transform="translate(2475,0)"></use>
                    <use
                      data-c="20"
                      xlink:href="#MJX-1-TEX-N-20"
                      transform="translate(2781,0)"></use>
                    <use
                      data-c="63"
                      xlink:href="#MJX-1-TEX-N-63"
                      transform="translate(3031,0)"></use>
                    <use
                      data-c="68"
                      xlink:href="#MJX-1-TEX-N-68"
                      transform="translate(3475,0)"></use>
                    <use
                      data-c="61"
                      xlink:href="#MJX-1-TEX-N-61"
                      transform="translate(4031,0)"></use>
                    <use
                      data-c="6E"
                      xlink:href="#MJX-1-TEX-N-6E"
                      transform="translate(4531,0)"></use>
                    <use
                      data-c="67"
                      xlink:href="#MJX-1-TEX-N-67"
                      transform="translate(5087,0)"></use>
                    <use
                      data-c="65"
                      xlink:href="#MJX-1-TEX-N-65"
                      transform="translate(5587,0)"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6681,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(6848,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mo" transform="translate(7292.8,0)">
                    <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8070.8,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g data-mml-node="mstyle" transform="translate(8237.8,0)">
                    <g data-mml-node="mspace"></g>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    data-mjx-texclass="ORD"
                    transform="translate(8682.6,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(220,676)">
                        <g data-mml-node="mstyle">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mspace"
                          transform="translate(-167,0)"></g>
                        <g data-mml-node="mtext" transform="translate(-17,0)">
                          <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                          <use
                            data-c="6D"
                            xlink:href="#MJX-1-TEX-N-6D"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(1333,0)"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(1833,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2389,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(2945,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(3334,0)"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(3584,0)"></use>
                          <use
                            data-c="66"
                            xlink:href="#MJX-1-TEX-N-66"
                            transform="translate(4084,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(4390,0)"></use>
                          <use
                            data-c="63"
                            xlink:href="#MJX-1-TEX-N-63"
                            transform="translate(4640,0)"></use>
                          <use
                            data-c="68"
                            xlink:href="#MJX-1-TEX-N-68"
                            transform="translate(5084,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(5640,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(6140,0)"></use>
                          <use
                            data-c="67"
                            xlink:href="#MJX-1-TEX-N-67"
                            transform="translate(6696,0)"></use>
                          <use
                            data-c="65"
                            xlink:href="#MJX-1-TEX-N-65"
                            transform="translate(7196,0)"></use>
                        </g>
                        <g data-mml-node="mstyle" transform="translate(7623,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mspace"
                          transform="translate(7456,0)"></g>
                      </g>
                      <g data-mml-node="mtext" transform="translate(706,-686)">
                        <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                        <use
                          data-c="6D"
                          xlink:href="#MJX-1-TEX-N-6D"
                          transform="translate(500,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(1333,0)"></use>
                        <use
                          data-c="75"
                          xlink:href="#MJX-1-TEX-N-75"
                          transform="translate(1833,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(2389,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(2945,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(3334,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(3584,0)"></use>
                        <use
                          data-c="66"
                          xlink:href="#MJX-1-TEX-N-66"
                          transform="translate(4084,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(4390,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(4640,0)"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(5029,0)"></use>
                        <use
                          data-c="6D"
                          xlink:href="#MJX-1-TEX-N-6D"
                          transform="translate(5307,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(6140,0)"></use>
                      </g>
                      <rect width="7756" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                  <g
                    data-mml-node="mspace"
                    transform="translate(16678.6,0)"></g>
                  <g data-mml-node="mo" transform="translate(16778.6,0)">
                    <g data-c="2033">
                      <use data-c="2032" xlink:href="#MJX-1-TEX-N-2032"></use>
                      <use
                        data-c="2032"
                        xlink:href="#MJX-1-TEX-N-2032"
                        transform="translate(275,0)"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`where “amount of change” is short for “amount of
change on the `}
            <NoBreak>
              <Math>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.109ex"
                  height="1.464ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 490 647"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </Math>
              {`-axis”.`}
            </NoBreak>
            {` By extension, taking all
three permutations of the slope formula into account
gives us...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/53.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`...these formulas, commonly useful in “applied”
problems.`}</VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {``}
              <b>{`Example 3.`}</b>
              {`
The increase in height of the above balloon
over a period of 5 seconds is`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -0.566ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="21.643ex"
                height="2.262ex"
                role="img"
                focusable="false"
                viewBox="0 -750 9566 1000"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-N-30"
                    d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  <path
                    id="MJX-1-TEX-N-2E"
                    d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                  <path
                    id="MJX-1-TEX-N-37"
                    d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>
                  <path
                    id="MJX-1-TEX-N-35"
                    d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                  <path
                    id="MJX-1-TEX-N-6D"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-2F"
                    d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                  <path
                    id="MJX-1-TEX-N-73"
                    d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                  <path
                    id="MJX-1-TEX-N-D7"
                    d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      <use
                        data-c="2E"
                        xlink:href="#MJX-1-TEX-N-2E"
                        transform="translate(500,0)"></use>
                      <use
                        data-c="37"
                        xlink:href="#MJX-1-TEX-N-37"
                        transform="translate(778,0)"></use>
                      <use
                        data-c="35"
                        xlink:href="#MJX-1-TEX-N-35"
                        transform="translate(1278,0)"></use>
                    </g>
                    <g data-mml-node="mtext" transform="translate(1778,0)">
                      <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                    </g>
                    <g
                      data-mml-node="TeXAtom"
                      data-mjx-texclass="ORD"
                      transform="translate(2611,0)">
                      <g data-mml-node="mo">
                        <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                      </g>
                    </g>
                    <g data-mml-node="mtext" transform="translate(3111,0)">
                      <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3727.2,0)">
                      <use data-c="D7" xlink:href="#MJX-1-TEX-N-D7"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(4727.4,0)">
                      <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                    </g>
                    <g data-mml-node="mtext" transform="translate(5227.4,0)">
                      <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(5899.2,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(6955,0)">
                      <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                      <use
                        data-c="2E"
                        xlink:href="#MJX-1-TEX-N-2E"
                        transform="translate(500,0)"></use>
                      <use
                        data-c="37"
                        xlink:href="#MJX-1-TEX-N-37"
                        transform="translate(778,0)"></use>
                      <use
                        data-c="35"
                        xlink:href="#MJX-1-TEX-N-35"
                        transform="translate(1278,0)"></use>
                    </g>
                    <g data-mml-node="mtext" transform="translate(8733,0)">
                      <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`following the template`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -2.149ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="35.008ex"
                height="5.43ex"
                role="img"
                focusable="false"
                viewBox="0 -1450 15473.4 2400"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-N-28"
                    d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                  <path
                    id="MJX-1-TEX-N-72"
                    d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                  <path
                    id="MJX-1-TEX-N-61"
                    d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                  <path
                    id="MJX-1-TEX-N-74"
                    d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
                  <path
                    id="MJX-1-TEX-N-65"
                    d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                  <path id="MJX-1-TEX-N-20" d=""></path>
                  <path
                    id="MJX-1-TEX-N-6F"
                    d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                  <path
                    id="MJX-1-TEX-N-66"
                    d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z"></path>
                  <path
                    id="MJX-1-TEX-N-63"
                    d="M370 305T349 305T313 320T297 358Q297 381 312 396Q317 401 317 402T307 404Q281 408 258 408Q209 408 178 376Q131 329 131 219Q131 137 162 90Q203 29 272 29Q313 29 338 55T374 117Q376 125 379 127T395 129H409Q415 123 415 120Q415 116 411 104T395 71T366 33T318 2T249 -11Q163 -11 99 53T34 214Q34 318 99 383T250 448T370 421T404 357Q404 334 387 320Z"></path>
                  <path
                    id="MJX-1-TEX-N-68"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 124T102 167T103 217T103 272T103 329Q103 366 103 407T103 482T102 542T102 586T102 603Q99 622 88 628T43 637H25V660Q25 683 27 683L37 684Q47 685 66 686T103 688Q120 689 140 690T170 693T181 694H184V367Q244 442 328 442Q451 442 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-6E"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-67"
                    d="M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z"></path>
                  <path
                    id="MJX-1-TEX-N-29"
                    d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                  <path
                    id="MJX-1-TEX-N-D7"
                    d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path>
                  <path
                    id="MJX-1-TEX-N-6D"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-75"
                    d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                  <path
                    id="MJX-1-TEX-N-69"
                    d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
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
                    <g data-mml-node="mtable">
                      <g data-mml-node="mtr" transform="translate(0,700)">
                        <g data-mml-node="mtd">
                          <g data-mml-node="mspace"></g>
                          <g data-mml-node="mo" transform="translate(80,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mtext" transform="translate(469,0)">
                            <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                            <use
                              data-c="61"
                              xlink:href="#MJX-1-TEX-N-61"
                              transform="translate(392,0)"></use>
                            <use
                              data-c="74"
                              xlink:href="#MJX-1-TEX-N-74"
                              transform="translate(892,0)"></use>
                            <use
                              data-c="65"
                              xlink:href="#MJX-1-TEX-N-65"
                              transform="translate(1281,0)"></use>
                            <use
                              data-c="20"
                              xlink:href="#MJX-1-TEX-N-20"
                              transform="translate(1725,0)"></use>
                            <use
                              data-c="6F"
                              xlink:href="#MJX-1-TEX-N-6F"
                              transform="translate(1975,0)"></use>
                            <use
                              data-c="66"
                              xlink:href="#MJX-1-TEX-N-66"
                              transform="translate(2475,0)"></use>
                            <use
                              data-c="20"
                              xlink:href="#MJX-1-TEX-N-20"
                              transform="translate(2781,0)"></use>
                            <use
                              data-c="63"
                              xlink:href="#MJX-1-TEX-N-63"
                              transform="translate(3031,0)"></use>
                            <use
                              data-c="68"
                              xlink:href="#MJX-1-TEX-N-68"
                              transform="translate(3475,0)"></use>
                            <use
                              data-c="61"
                              xlink:href="#MJX-1-TEX-N-61"
                              transform="translate(4031,0)"></use>
                            <use
                              data-c="6E"
                              xlink:href="#MJX-1-TEX-N-6E"
                              transform="translate(4531,0)"></use>
                            <use
                              data-c="67"
                              xlink:href="#MJX-1-TEX-N-67"
                              transform="translate(5087,0)"></use>
                            <use
                              data-c="65"
                              xlink:href="#MJX-1-TEX-N-65"
                              transform="translate(5587,0)"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(6500,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(7111.2,0)">
                            <use data-c="D7" xlink:href="#MJX-1-TEX-N-D7"></use>
                          </g>
                          <g
                            data-mml-node="mtext"
                            transform="translate(8111.4,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                            <use
                              data-c="61"
                              xlink:href="#MJX-1-TEX-N-61"
                              transform="translate(389,0)"></use>
                            <use
                              data-c="6D"
                              xlink:href="#MJX-1-TEX-N-6D"
                              transform="translate(889,0)"></use>
                            <use
                              data-c="6F"
                              xlink:href="#MJX-1-TEX-N-6F"
                              transform="translate(1722,0)"></use>
                            <use
                              data-c="75"
                              xlink:href="#MJX-1-TEX-N-75"
                              transform="translate(2222,0)"></use>
                            <use
                              data-c="6E"
                              xlink:href="#MJX-1-TEX-N-6E"
                              transform="translate(2778,0)"></use>
                            <use
                              data-c="74"
                              xlink:href="#MJX-1-TEX-N-74"
                              transform="translate(3334,0)"></use>
                            <use
                              data-c="20"
                              xlink:href="#MJX-1-TEX-N-20"
                              transform="translate(3723,0)"></use>
                            <use
                              data-c="6F"
                              xlink:href="#MJX-1-TEX-N-6F"
                              transform="translate(3973,0)"></use>
                            <use
                              data-c="66"
                              xlink:href="#MJX-1-TEX-N-66"
                              transform="translate(4473,0)"></use>
                            <use
                              data-c="20"
                              xlink:href="#MJX-1-TEX-N-20"
                              transform="translate(4779,0)"></use>
                            <use
                              data-c="74"
                              xlink:href="#MJX-1-TEX-N-74"
                              transform="translate(5029,0)"></use>
                            <use
                              data-c="69"
                              xlink:href="#MJX-1-TEX-N-69"
                              transform="translate(5418,0)"></use>
                            <use
                              data-c="6D"
                              xlink:href="#MJX-1-TEX-N-6D"
                              transform="translate(5696,0)"></use>
                            <use
                              data-c="65"
                              xlink:href="#MJX-1-TEX-N-65"
                              transform="translate(6529,0)"></use>
                            <use
                              data-c="29"
                              xlink:href="#MJX-1-TEX-N-29"
                              transform="translate(6973,0)"></use>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mtr" transform="translate(0,-700)">
                        <g data-mml-node="mtd" transform="translate(2974.8,0)">
                          <g data-mml-node="mo">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g
                            data-mml-node="mtext"
                            transform="translate(1055.8,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                            <use
                              data-c="61"
                              xlink:href="#MJX-1-TEX-N-61"
                              transform="translate(389,0)"></use>
                            <use
                              data-c="6D"
                              xlink:href="#MJX-1-TEX-N-6D"
                              transform="translate(889,0)"></use>
                            <use
                              data-c="6F"
                              xlink:href="#MJX-1-TEX-N-6F"
                              transform="translate(1722,0)"></use>
                            <use
                              data-c="75"
                              xlink:href="#MJX-1-TEX-N-75"
                              transform="translate(2222,0)"></use>
                            <use
                              data-c="6E"
                              xlink:href="#MJX-1-TEX-N-6E"
                              transform="translate(2778,0)"></use>
                            <use
                              data-c="74"
                              xlink:href="#MJX-1-TEX-N-74"
                              transform="translate(3334,0)"></use>
                            <use
                              data-c="20"
                              xlink:href="#MJX-1-TEX-N-20"
                              transform="translate(3723,0)"></use>
                            <use
                              data-c="6F"
                              xlink:href="#MJX-1-TEX-N-6F"
                              transform="translate(3973,0)"></use>
                            <use
                              data-c="66"
                              xlink:href="#MJX-1-TEX-N-66"
                              transform="translate(4473,0)"></use>
                            <use
                              data-c="20"
                              xlink:href="#MJX-1-TEX-N-20"
                              transform="translate(4779,0)"></use>
                            <use
                              data-c="63"
                              xlink:href="#MJX-1-TEX-N-63"
                              transform="translate(5029,0)"></use>
                            <use
                              data-c="68"
                              xlink:href="#MJX-1-TEX-N-68"
                              transform="translate(5473,0)"></use>
                            <use
                              data-c="61"
                              xlink:href="#MJX-1-TEX-N-61"
                              transform="translate(6029,0)"></use>
                            <use
                              data-c="6E"
                              xlink:href="#MJX-1-TEX-N-6E"
                              transform="translate(6529,0)"></use>
                            <use
                              data-c="67"
                              xlink:href="#MJX-1-TEX-N-67"
                              transform="translate(7085,0)"></use>
                            <use
                              data-c="65"
                              xlink:href="#MJX-1-TEX-N-65"
                              transform="translate(7585,0)"></use>
                            <use
                              data-c="29"
                              xlink:href="#MJX-1-TEX-N-29"
                              transform="translate(8029,0)"></use>
                          </g>
                          <g
                            data-mml-node="mspace"
                            transform="translate(9473.8,0)"></g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`found in the second line of the table. (Indeed,
`}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.05ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="4.023ex"
                    height="1.579ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -676 1778 698"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                      <path
                        id="MJX-1-TEX-N-2E"
                        d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                      <path
                        id="MJX-1-TEX-N-37"
                        d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>
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
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          <use
                            data-c="2E"
                            xlink:href="#MJX-1-TEX-N-2E"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="37"
                            xlink:href="#MJX-1-TEX-N-37"
                            transform="translate(778,0)"></use>
                          <use
                            data-c="35"
                            xlink:href="#MJX-1-TEX-N-35"
                            transform="translate(1278,0)"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
              </NoBreak>
              {`m`}
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
                        id="MJX-1-TEX-N-2F"
                        d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                    </defs>
                    <g
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      transform="scale(1,-1)">
                      <g data-mml-node="math">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mo">
                            <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
                {`s`}
              </NoBreak>
              {` is the “rate of change” of the
balloon's height.)`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {``}
              <b>{`Example 4.`}</b>
              {`
The amount of time required
for the balloon to go up by (say) `}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: 0;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.131ex"
                    height="1.532ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -677 500 677"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-34"
                        d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                    </defs>
                    <g
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      transform="scale(1,-1)">
                      <g data-mml-node="math">
                        <g data-mml-node="mn">
                          <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
                {`m`}
              </NoBreak>
              {` is`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -2.172ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="21.759ex"
                height="5.233ex"
                role="img"
                focusable="false"
                viewBox="0 -1353 9617.6 2313"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-N-34"
                    d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                  <path
                    id="MJX-1-TEX-N-6D"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-30"
                    d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  <path
                    id="MJX-1-TEX-N-2E"
                    d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                  <path
                    id="MJX-1-TEX-N-37"
                    d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>
                  <path
                    id="MJX-1-TEX-N-35"
                    d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                  <path
                    id="MJX-1-TEX-N-2F"
                    d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                  <path
                    id="MJX-1-TEX-N-73"
                    d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mrow" transform="translate(1306,676)">
                        <g data-mml-node="mn">
                          <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                        </g>
                        <g data-mml-node="mtext" transform="translate(500,0)">
                          <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-710)">
                        <g data-mml-node="mn">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          <use
                            data-c="2E"
                            xlink:href="#MJX-1-TEX-N-2E"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="37"
                            xlink:href="#MJX-1-TEX-N-37"
                            transform="translate(778,0)"></use>
                          <use
                            data-c="35"
                            xlink:href="#MJX-1-TEX-N-35"
                            transform="translate(1278,0)"></use>
                        </g>
                        <g data-mml-node="mtext" transform="translate(1778,0)">
                          <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                        </g>
                        <g
                          data-mml-node="TeXAtom"
                          data-mjx-texclass="ORD"
                          transform="translate(2611,0)">
                          <g data-mml-node="mo">
                            <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                          </g>
                        </g>
                        <g data-mml-node="mtext" transform="translate(3111,0)">
                          <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                        </g>
                      </g>
                      <rect width="3705" height="60" x="120" y="220"></rect>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(3945,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mo" transform="translate(4055.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(5111.6,0)">
                      <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                      <use
                        data-c="2E"
                        xlink:href="#MJX-1-TEX-N-2E"
                        transform="translate(500,0)"></use>
                      <use
                        data-c="33"
                        xlink:href="#MJX-1-TEX-N-33"
                        transform="translate(778,0)"></use>
                      <use
                        data-c="33"
                        xlink:href="#MJX-1-TEX-N-33"
                        transform="translate(1278,0)"></use>
                      <use
                        data-c="33"
                        xlink:href="#MJX-1-TEX-N-33"
                        transform="translate(1778,0)"></use>
                      <use
                        data-c="33"
                        xlink:href="#MJX-1-TEX-N-33"
                        transform="translate(2278,0)"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(7889.6,0)">
                      <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(8334.2,0)">
                      <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(8778.9,0)">
                      <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                    </g>
                    <g data-mml-node="mtext" transform="translate(9223.6,0)">
                      <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                    </g>
                  </g>
                </g>
              </svg>
              <ImageRight
                clickable_on_desktop={true}
                children_x="29%"
                children_y="34.5%"
                offset_x="-6rem"
                src="/images/54.svg">
                <MathBlock>
                  <svg
                    style="vertical-align: -1.602ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="27.145ex"
                    height="4.663ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -1353 11997.9 2061"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-34"
                        d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                      <path
                        id="MJX-1-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                      <path
                        id="MJX-1-TEX-N-2E"
                        d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
                      <path
                        id="MJX-1-TEX-N-37"
                        d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path>
                      <path
                        id="MJX-1-TEX-N-35"
                        d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path>
                      <path
                        id="MJX-1-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="mfrac">
                            <g
                              data-mml-node="mn"
                              transform="translate(859,676)">
                              <use
                                data-c="34"
                                xlink:href="#MJX-1-TEX-N-34"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(220,-686)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                              <use
                                data-c="2E"
                                xlink:href="#MJX-1-TEX-N-2E"
                                transform="translate(500,0)"></use>
                              <use
                                data-c="37"
                                xlink:href="#MJX-1-TEX-N-37"
                                transform="translate(778,0)"></use>
                              <use
                                data-c="35"
                                xlink:href="#MJX-1-TEX-N-35"
                                transform="translate(1278,0)"></use>
                            </g>
                            <rect
                              width="1978"
                              height="60"
                              x="120"
                              y="220"></rect>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2495.8,0)">
                          <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(3551.6,0)">
                          <use data-c="35" xlink:href="#MJX-1-TEX-N-35"></use>
                          <use
                            data-c="2E"
                            xlink:href="#MJX-1-TEX-N-2E"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="33"
                            xlink:href="#MJX-1-TEX-N-33"
                            transform="translate(778,0)"></use>
                          <use
                            data-c="33"
                            xlink:href="#MJX-1-TEX-N-33"
                            transform="translate(1278,0)"></use>
                          <use
                            data-c="33"
                            xlink:href="#MJX-1-TEX-N-33"
                            transform="translate(1778,0)"></use>
                          <use
                            data-c="33"
                            xlink:href="#MJX-1-TEX-N-33"
                            transform="translate(2278,0)"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(6329.6,0)">
                          <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(6774.2,0)">
                          <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(7218.9,0)">
                          <use data-c="2E" xlink:href="#MJX-1-TEX-N-2E"></use>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(7496.9,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(9496.9,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(11496.9,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(11663.9,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mstyle"
                          transform="translate(11830.9,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </MathBlock>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`following the template`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -2.018ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="40.23ex"
                height="5.143ex"
                role="img"
                focusable="false"
                viewBox="0 -1381 17781.6 2273"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-N-201C"
                    d="M128 494Q128 528 137 560T158 616T185 658T209 685T223 694T236 685T245 670Q244 668 231 654T204 622T178 571T164 501Q164 489 165 489T170 491T183 497T201 500Q226 500 244 483T262 440T245 397T202 379Q173 379 151 405T128 494ZM332 494Q332 528 341 560T362 616T389 658T413 685T427 694T439 685T449 672Q449 669 437 656T411 625T383 573T368 501Q368 489 369 489T374 491T387 497T405 500Q430 500 448 483T466 440T449 397T406 379Q377 379 355 405T332 494Z"></path>
                  <path
                    id="MJX-1-TEX-N-61"
                    d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"></path>
                  <path
                    id="MJX-1-TEX-N-6D"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-6F"
                    d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                  <path
                    id="MJX-1-TEX-N-75"
                    d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                  <path
                    id="MJX-1-TEX-N-6E"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-74"
                    d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"></path>
                  <path id="MJX-1-TEX-N-20" d=""></path>
                  <path
                    id="MJX-1-TEX-N-66"
                    d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z"></path>
                  <path
                    id="MJX-1-TEX-N-69"
                    d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                  <path
                    id="MJX-1-TEX-N-65"
                    d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                  <path
                    id="MJX-1-TEX-N-3D"
                    d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                  <path
                    id="MJX-1-TEX-N-63"
                    d="M370 305T349 305T313 320T297 358Q297 381 312 396Q317 401 317 402T307 404Q281 408 258 408Q209 408 178 376Q131 329 131 219Q131 137 162 90Q203 29 272 29Q313 29 338 55T374 117Q376 125 379 127T395 129H409Q415 123 415 120Q415 116 411 104T395 71T366 33T318 2T249 -11Q163 -11 99 53T34 214Q34 318 99 383T250 448T370 421T404 357Q404 334 387 320Z"></path>
                  <path
                    id="MJX-1-TEX-N-68"
                    d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 124T102 167T103 217T103 272T103 329Q103 366 103 407T103 482T102 542T102 586T102 603Q99 622 88 628T43 637H25V660Q25 683 27 683L37 684Q47 685 66 686T103 688Q120 689 140 690T170 693T181 694H184V367Q244 442 328 442Q451 442 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                  <path
                    id="MJX-1-TEX-N-67"
                    d="M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z"></path>
                  <path
                    id="MJX-1-TEX-N-72"
                    d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                  <path
                    id="MJX-1-TEX-N-201D"
                    d="M34 634Q34 659 50 676T93 694Q121 694 144 668T168 579Q168 525 146 476T101 403T73 379Q69 379 60 388T50 401Q50 404 62 417T88 448T116 500T131 572Q131 584 130 584T125 581T112 576T94 573Q69 573 52 590T34 634ZM238 634Q238 659 254 676T297 694Q325 694 348 668T372 579Q372 525 350 476T305 403T277 379Q273 379 264 388T254 401Q254 404 266 417T292 448T320 500T335 572Q335 584 334 584T329 581T316 576T298 573Q273 573 256 590T238 634Z"></path>
                </defs>
                <g
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mtext">
                      <use data-c="201C" xlink:href="#MJX-1-TEX-N-201C"></use>
                    </g>
                    <g data-mml-node="mspace" transform="translate(500,0)"></g>
                    <g data-mml-node="mtext" transform="translate(600,0)">
                      <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                      <use
                        data-c="6D"
                        xlink:href="#MJX-1-TEX-N-6D"
                        transform="translate(500,0)"></use>
                      <use
                        data-c="6F"
                        xlink:href="#MJX-1-TEX-N-6F"
                        transform="translate(1333,0)"></use>
                      <use
                        data-c="75"
                        xlink:href="#MJX-1-TEX-N-75"
                        transform="translate(1833,0)"></use>
                      <use
                        data-c="6E"
                        xlink:href="#MJX-1-TEX-N-6E"
                        transform="translate(2389,0)"></use>
                      <use
                        data-c="74"
                        xlink:href="#MJX-1-TEX-N-74"
                        transform="translate(2945,0)"></use>
                      <use
                        data-c="20"
                        xlink:href="#MJX-1-TEX-N-20"
                        transform="translate(3334,0)"></use>
                      <use
                        data-c="6F"
                        xlink:href="#MJX-1-TEX-N-6F"
                        transform="translate(3584,0)"></use>
                      <use
                        data-c="66"
                        xlink:href="#MJX-1-TEX-N-66"
                        transform="translate(4084,0)"></use>
                      <use
                        data-c="20"
                        xlink:href="#MJX-1-TEX-N-20"
                        transform="translate(4390,0)"></use>
                      <use
                        data-c="74"
                        xlink:href="#MJX-1-TEX-N-74"
                        transform="translate(4640,0)"></use>
                      <use
                        data-c="69"
                        xlink:href="#MJX-1-TEX-N-69"
                        transform="translate(5029,0)"></use>
                      <use
                        data-c="6D"
                        xlink:href="#MJX-1-TEX-N-6D"
                        transform="translate(5307,0)"></use>
                      <use
                        data-c="65"
                        xlink:href="#MJX-1-TEX-N-65"
                        transform="translate(6140,0)"></use>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(7184,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(7351,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mo" transform="translate(7795.8,0)">
                      <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(8573.8,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mstyle" transform="translate(8740.8,0)">
                      <g data-mml-node="mspace"></g>
                    </g>
                    <g data-mml-node="mfrac" transform="translate(9185.6,0)">
                      <g data-mml-node="mrow" transform="translate(220,676)">
                        <g data-mml-node="mstyle">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mspace"
                          transform="translate(-167,0)"></g>
                        <g data-mml-node="mtext" transform="translate(-17,0)">
                          <use data-c="61" xlink:href="#MJX-1-TEX-N-61"></use>
                          <use
                            data-c="6D"
                            xlink:href="#MJX-1-TEX-N-6D"
                            transform="translate(500,0)"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(1333,0)"></use>
                          <use
                            data-c="75"
                            xlink:href="#MJX-1-TEX-N-75"
                            transform="translate(1833,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(2389,0)"></use>
                          <use
                            data-c="74"
                            xlink:href="#MJX-1-TEX-N-74"
                            transform="translate(2945,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(3334,0)"></use>
                          <use
                            data-c="6F"
                            xlink:href="#MJX-1-TEX-N-6F"
                            transform="translate(3584,0)"></use>
                          <use
                            data-c="66"
                            xlink:href="#MJX-1-TEX-N-66"
                            transform="translate(4084,0)"></use>
                          <use
                            data-c="20"
                            xlink:href="#MJX-1-TEX-N-20"
                            transform="translate(4390,0)"></use>
                          <use
                            data-c="63"
                            xlink:href="#MJX-1-TEX-N-63"
                            transform="translate(4640,0)"></use>
                          <use
                            data-c="68"
                            xlink:href="#MJX-1-TEX-N-68"
                            transform="translate(5084,0)"></use>
                          <use
                            data-c="61"
                            xlink:href="#MJX-1-TEX-N-61"
                            transform="translate(5640,0)"></use>
                          <use
                            data-c="6E"
                            xlink:href="#MJX-1-TEX-N-6E"
                            transform="translate(6140,0)"></use>
                          <use
                            data-c="67"
                            xlink:href="#MJX-1-TEX-N-67"
                            transform="translate(6696,0)"></use>
                          <use
                            data-c="65"
                            xlink:href="#MJX-1-TEX-N-65"
                            transform="translate(7196,0)"></use>
                        </g>
                        <g data-mml-node="mstyle" transform="translate(7623,0)">
                          <g data-mml-node="mspace"></g>
                        </g>
                        <g
                          data-mml-node="mspace"
                          transform="translate(7456,0)"></g>
                      </g>
                      <g
                        data-mml-node="mtext"
                        transform="translate(982.5,-686)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="61"
                          xlink:href="#MJX-1-TEX-N-61"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="74"
                          xlink:href="#MJX-1-TEX-N-74"
                          transform="translate(892,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1281,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(1725,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(1975,0)"></use>
                        <use
                          data-c="66"
                          xlink:href="#MJX-1-TEX-N-66"
                          transform="translate(2475,0)"></use>
                        <use
                          data-c="20"
                          xlink:href="#MJX-1-TEX-N-20"
                          transform="translate(2781,0)"></use>
                        <use
                          data-c="63"
                          xlink:href="#MJX-1-TEX-N-63"
                          transform="translate(3031,0)"></use>
                        <use
                          data-c="68"
                          xlink:href="#MJX-1-TEX-N-68"
                          transform="translate(3475,0)"></use>
                        <use
                          data-c="61"
                          xlink:href="#MJX-1-TEX-N-61"
                          transform="translate(4031,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(4531,0)"></use>
                        <use
                          data-c="67"
                          xlink:href="#MJX-1-TEX-N-67"
                          transform="translate(5087,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(5587,0)"></use>
                      </g>
                      <rect width="7756" height="60" x="120" y="220"></rect>
                    </g>
                    <g
                      data-mml-node="mspace"
                      transform="translate(17181.6,0)"></g>
                    <g data-mml-node="mtext" transform="translate(17281.6,0)">
                      <use data-c="201D" xlink:href="#MJX-1-TEX-N-201D"></use>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`found in the third line of the table.`}</VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section divider={false}>
          <VerticalChunk>
            {``}
            <b>{`Postscript: Units vs Dimensions.`}</b>
            {`
Comparing`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CenterDisplay>
            {`“the `}
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
              {`-axis`}
            </NoBreak>
            {` has dimensions of time”`}
          </CenterDisplay>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`with`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CenterDisplay>
            {`“the `}
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
              {`-axis`}
            </NoBreak>
            {` has units of seconds”`}
          </CenterDisplay>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`one could easily be tricked into thinking that a
“dimension” is the same thing as a “unit”. In
fact, dimensions are broader categories, such as,
namely,`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`time`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
`}</VerticalChunk>
          <CentralItalicDisplay>{`length`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
`}</VerticalChunk>
          <CentralItalicDisplay>{`mass`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`each of which covers `}
            <i>{`several different`}</i>
            {` units.
For example, in the “time” dimension, one finds
individual units of the type`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`years, seconds, minutes, hours, days`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`(etc), while in
the “length” dimension one finds`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`meters, kilometers, millimeters, yards, feet`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`(etc), and so on. (You can imagine some of the
units found in the “mass” dimension, e.g..) On
the other hand, dimensions can be multiplied and
divided just like units. For example,`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`length over time`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`is another dimension, commonly known as...
velocity!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Exercises labels={["0", "1", "2", "3"]}>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 1.`}</b>
              {`
True or false: Lines of slope `}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.781ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.04ex"
                    height="2.746ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -868.9 1343.7 1213.9"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                      <path
                        id="MJX-1-TEX-N-31"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
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
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,398) scale(0.707)">
                            <g data-mml-node="mo">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g data-mml-node="mn" transform="translate(778,0)">
                              <use
                                data-c="31"
                                xlink:href="#MJX-1-TEX-N-31"></use>
                            </g>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(495.1,-345) scale(0.707)">
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                          </g>
                          <rect
                            width="1103.7"
                            height="60"
                            x="120"
                            y="220"></rect>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
              </NoBreak>
              {`
are perpendicular to lines of slope `}
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
              {`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>{`This is true, as illustrated by the following pair of lines:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image class="relative w-fit" src="/images/55.svg">
                <ImageRight src="/images/56.svg">
                  <VerticalChunk>
                    {`offset`}
                    <i>{`y 5rem
offset`}</i>
                    {`x -1.3rem
use`}
                    <i>{`squiggle`}</i>
                    {`on_mobile false`}
                  </VerticalChunk>
                </ImageRight>
                <ImageLeft src="/images/57.svg">
                  <VerticalChunk>
                    {`offset`}
                    <i>{`x -7rem
offset`}</i>
                    {`y 0.5rem
y bottom
img`}
                    <i>{`position bottom
use`}</i>
                    {`squiggle`}
                    <i>{`on`}</i>
                    {`mobile false`}
                  </VerticalChunk>
                </ImageLeft>
              </Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`In more detail, the two triangles are related
by a `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.05ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="3.25ex"
                      height="1.649ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -707 1436.6 729"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-39"
                          d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                        <path
                          id="MJX-1-TEX-N-2218"
                          d="M55 251Q55 328 112 386T249 444T386 388T444 249Q444 171 388 113T250 55Q170 55 113 112T55 251ZM245 403Q188 403 142 361T96 250Q96 183 141 140T250 96Q284 96 313 109T354 135T375 160Q403 197 403 250Q403 313 360 358T245 403Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="msup">
                            <g data-mml-node="mn">
                              <use
                                data-c="39"
                                xlink:href="#MJX-1-TEX-N-39"></use>
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"
                                transform="translate(500,0)"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(1033,393.1) scale(0.707)">
                              <use
                                data-c="2218"
                                xlink:href="#MJX-1-TEX-N-2218"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` rotation and so, likewise,
are the lines defined by their hypotenuses!`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Note 1.`}</i>
                {`
More generally, a line of slope `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.138ex"
                      height="1.439ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 503 636"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` is
perpendicular to a line of slope `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.161ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 2281 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        <path
                          id="MJX-1-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                        <path
                          id="MJX-1-TEX-N-2F"
                          d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mo">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(778,0)">
                            <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                          </g>
                          <g
                            data-mml-node="TeXAtom"
                            data-mjx-texclass="ORD"
                            transform="translate(1278,0)">
                            <g data-mml-node="mo">
                              <use
                                data-c="2F"
                                xlink:href="#MJX-1-TEX-N-2F"></use>
                            </g>
                          </g>
                          <g data-mml-node="mi" transform="translate(1778,0)">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`,`}
                </NoBreak>
                {` for
all `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.486ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.286ex"
                      height="2.106ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -716 2336.6 931"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-N-2260"
                          d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(780.8,0)">
                            <use
                              data-c="2260"
                              xlink:href="#MJX-1-TEX-N-2260"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(1836.6,0)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`.`}
                </NoBreak>
                {` By a similar drawing:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image class="relative w-fit" src="/images/58.svg">
                <ImageRight src="/images/59.svg">
                  <VerticalChunk>
                    {`offset`}
                    <i>{`y 7.2rem
offset`}</i>
                    {`x -1.2rem
use`}
                    <i>{`squiggle`}</i>
                    {`on_mobile false`}
                  </VerticalChunk>
                </ImageRight>
                <ImageLeft src="/images/60.svg">
                  <VerticalChunk>
                    {`offset`}
                    <i>{`x -5rem
offset`}</i>
                    {`y 0.5rem
y bottom
img`}
                    <i>{`position bottom
use`}</i>
                    {`squiggle`}
                    <i>{`on`}</i>
                    {`mobile false`}
                  </VerticalChunk>
                </ImageLeft>
              </Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`(If the axes are oriented the usual way then 
the above drawing covers all the cases `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.286ex"
                      height="1.946ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 2336.6 860"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-N-3E"
                          d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(780.8,0)">
                            <use data-c="3E" xlink:href="#MJX-1-TEX-N-3E"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(1836.6,0)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`,
whereas if we flip the two number axes to point
down/left the above drawing covers all the cases 
`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.286ex"
                      height="1.946ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 2336.6 860"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-N-3C"
                          d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(780.8,0)">
                            <use data-c="3C" xlink:href="#MJX-1-TEX-N-3C"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(1836.6,0)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`—magic!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 2.`}</b>
              {`
Find the general equation of a line of slope
`}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.439ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.138ex"
                    height="1.439ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -442 503 636"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-I-1D45D"
                        d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    </defs>
                    <g
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      transform="scale(1,-1)">
                      <g data-mml-node="math">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D45D"
                            xlink:href="#MJX-1-TEX-I-1D45D"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
              </NoBreak>
              {` passing through a point `}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.566ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.144ex"
                    height="2.262ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -750 3157.8 1000"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-28"
                        d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                      <path
                        id="MJX-1-TEX-I-1D465"
                        d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                      <path
                        id="MJX-1-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                      <path
                        id="MJX-1-TEX-N-2C"
                        d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                      <path
                        id="MJX-1-TEX-I-1D466"
                        d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                        <g data-mml-node="mo">
                          <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(389,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1397.6,0)">
                          <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(1842.2,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2768.8,0)">
                          <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
              </NoBreak>
              {`.
(Hint: Start from the slope formula.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>
                {`A point `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.33ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 6776 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                        <path
                          id="MJX-1-TEX-N-29"
                          d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                        <path
                          id="MJX-1-TEX-N-2260"
                          d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(389,0)">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(961,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1405.7,0)">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1895.7,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(2562.4,0)">
                            <use
                              data-c="2260"
                              xlink:href="#MJX-1-TEX-N-2260"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(3618.2,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(4007.2,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(5015.8,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(5460.4,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(6387,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` is on the
line of slope `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.138ex"
                      height="1.439ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 503 636"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` if and only if`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.927ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.492ex"
                  height="4.775ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1259 5079.6 2110.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(780.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1836.6,0)">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(302,676)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(712.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1712.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D466"
                                  xlink:href="#MJX-1-TEX-I-1D466"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(523,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,-686)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(794.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1794.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D465"
                                  xlink:href="#MJX-1-TEX-I-1D465"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(605,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <rect width="3003" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <ImageLeft
                  use_squiggle_on_mobile={false}
                  offset_y="-7.1rem"
                  offset_x="-7.2rem"
                  img_position="top"
                  src="/images/62.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`because`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.927ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.093ex"
                  height="4.775ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1259 3577 2110.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                      <g data-mml-node="mstyle">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g data-mml-node="mstyle" transform="translate(167,0)">
                        <g data-mml-node="mspace"></g>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(334,0)">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(302,676)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(712.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1712.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D466"
                                  xlink:href="#MJX-1-TEX-I-1D466"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(523,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,-686)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(794.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1794.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D465"
                                  xlink:href="#MJX-1-TEX-I-1D465"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(605,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <rect width="3003" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`is the slope of the line segment from
`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7.144ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 3157.8 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="msub" transform="translate(389,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(1397.6,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1842.2,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(2768.8,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` to `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.169ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 2284.7 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(389,0)">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(961,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1405.7,0)">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1895.7,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`,`}
                </NoBreak>
                {` and it is necessary
and sufficient for this segment to have slope
`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.138ex"
                      height="1.439ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 503 636"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` in order for the point `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.169ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 2284.7 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(389,0)">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(961,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1405.7,0)">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1895.7,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` to be on
the line!`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}>{`Unfortunately, the equation`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.927ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.492ex"
                  height="4.775ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1259 5079.6 2110.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(780.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1836.6,0)">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(302,676)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(712.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1712.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D466"
                                  xlink:href="#MJX-1-TEX-I-1D466"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(523,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,-686)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(794.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1794.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D465"
                                  xlink:href="#MJX-1-TEX-I-1D465"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(605,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <rect width="3003" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`is not an entirely satisfactory answer,
because the point `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.33ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 6776 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                        <path
                          id="MJX-1-TEX-N-29"
                          d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                        <path
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(389,0)">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(961,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1405.7,0)">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1895.7,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(2562.4,0)">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(3618.2,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(4007.2,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(5015.8,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(5460.4,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(6387,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` itself
does not satisfy the equation. (We find`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.602ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.282ex"
                  height="4.638ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1342 2776.6 2050"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(780.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1836.6,0)">
                        <g data-mml-node="mfrac">
                          <g data-mml-node="mn" transform="translate(220,676)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(220,-686)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                          <rect width="700" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`if we plug in `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.375ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.593ex"
                      height="1.694ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -583 2914.1 748.6"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(849.8,0)">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1905.6,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
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
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.222ex"
                      height="1.783ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -583 2750.1 788"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                        <path
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(767.8,0)">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1823.6,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`,`}
                </NoBreak>
                {` which is
not a valid equality because the right-hand
side is an undefined quantity.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}>{`Instead, multiplying`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.927ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.492ex"
                  height="4.775ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1259 5079.6 2110.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(780.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(1836.6,0)">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(302,676)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(712.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1712.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D466"
                                  xlink:href="#MJX-1-TEX-I-1D466"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(523,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,-686)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mo"
                              transform="translate(794.2,0)">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g
                              data-mml-node="msub"
                              transform="translate(1794.4,0)">
                              <g data-mml-node="mi">
                                <use
                                  data-c="1D465"
                                  xlink:href="#MJX-1-TEX-I-1D465"></use>
                              </g>
                              <g
                                data-mml-node="mn"
                                transform="translate(605,-150) scale(0.707)">
                                <use
                                  data-c="30"
                                  xlink:href="#MJX-1-TEX-N-30"></use>
                              </g>
                            </g>
                          </g>
                          <rect width="3003" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`on both sides by `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.375ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.342ex"
                      height="1.694ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -583 2803 748.6"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(794.2,0)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1794.4,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`,`}
                </NoBreak>
                {` we find the
fraction-less equation`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.227ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 8056.6 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(503,0)">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(892,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1686.2,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2686.4,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(3695,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(4361.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(5417.6,0)">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(6129.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(7130,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`which is satisfied by the point `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.33ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 6776 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                        <path
                          id="MJX-1-TEX-N-29"
                          d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path>
                        <path
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(389,0)">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(961,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1405.7,0)">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1895.7,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(2562.4,0)">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(3618.2,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(4007.2,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(5015.8,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(5460.4,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(6387,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`
as well as by every other point on the line.
This can be a final answer, and, pleasingly,
has the form`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.439ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.774ex"
                  height="2.009ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 8740 888"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-201C"
                      d="M128 494Q128 528 137 560T158 616T185 658T209 685T223 694T236 685T245 670Q244 668 231 654T204 622T178 571T164 501Q164 489 165 489T170 491T183 497T201 500Q226 500 244 483T262 440T245 397T202 379Q173 379 151 405T128 494ZM332 494Q332 528 341 560T362 616T389 658T413 685T427 694T439 685T449 672Q449 669 437 656T411 625T383 573T368 501Q368 489 369 489T374 491T387 497T405 500Q430 500 448 483T466 440T449 397T406 379Q377 379 355 405T332 494Z"></path>
                    <path
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                    <path
                      id="MJX-1-TEX-N-6C"
                      d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"></path>
                    <path
                      id="MJX-1-TEX-N-6F"
                      d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"></path>
                    <path
                      id="MJX-1-TEX-N-70"
                      d="M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"></path>
                    <path
                      id="MJX-1-TEX-N-65"
                      d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path>
                    <path
                      id="MJX-1-TEX-N-D7"
                      d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path>
                    <path
                      id="MJX-1-TEX-N-72"
                      d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path>
                    <path
                      id="MJX-1-TEX-N-75"
                      d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path>
                    <path
                      id="MJX-1-TEX-N-6E"
                      d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-N-69"
                      d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path>
                    <path
                      id="MJX-1-TEX-N-201D"
                      d="M34 634Q34 659 50 676T93 694Q121 694 144 668T168 579Q168 525 146 476T101 403T73 379Q69 379 60 388T50 401Q50 404 62 417T88 448T116 500T131 572Q131 584 130 584T125 581T112 576T94 573Q69 573 52 590T34 634ZM238 634Q238 659 254 676T297 694Q325 694 348 668T372 579Q372 525 350 476T305 403T277 379Q273 379 264 388T254 401Q254 404 266 417T292 448T320 500T335 572Q335 584 334 584T329 581T316 576T298 573Q273 573 256 590T238 634Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mtext">
                        <use data-c="201C" xlink:href="#MJX-1-TEX-N-201C"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(500,0)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                        <use
                          data-c="6C"
                          xlink:href="#MJX-1-TEX-N-6C"
                          transform="translate(394,0)"></use>
                        <use
                          data-c="6F"
                          xlink:href="#MJX-1-TEX-N-6F"
                          transform="translate(672,0)"></use>
                        <use
                          data-c="70"
                          xlink:href="#MJX-1-TEX-N-70"
                          transform="translate(1172,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1728,0)"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(2894.2,0)">
                        <use data-c="D7" xlink:href="#MJX-1-TEX-N-D7"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(3894.4,0)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="75"
                          xlink:href="#MJX-1-TEX-N-75"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="6E"
                          xlink:href="#MJX-1-TEX-N-6E"
                          transform="translate(948,0)"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(5676.2,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(6732,0)">
                        <use data-c="72" xlink:href="#MJX-1-TEX-N-72"></use>
                        <use
                          data-c="69"
                          xlink:href="#MJX-1-TEX-N-69"
                          transform="translate(392,0)"></use>
                        <use
                          data-c="73"
                          xlink:href="#MJX-1-TEX-N-73"
                          transform="translate(670,0)"></use>
                        <use
                          data-c="65"
                          xlink:href="#MJX-1-TEX-N-65"
                          transform="translate(1064,0)"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(8240,0)">
                        <use data-c="201D" xlink:href="#MJX-1-TEX-N-201D"></use>
                      </g>
                    </g>
                  </g>
                </svg>
                <ImageRight
                  offset_y="-0.5rem"
                  offset_x="2.5rem"
                  src="/images/svg_slope_times_run_equals_rise_cloud.svg"></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`which can also make it easy to remember!`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Note 1.`}</i>
                {`
The answer we gave is more often written`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.227ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 8056.6 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(712.2,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(1712.4,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2916.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(3972.6,0)">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(4475.6,0)">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4864.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(5658.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(6659,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(7667.6,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`with the two sides of the equation swapped, or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.566ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.227ex"
                  height="2.262ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -750 8056.6 1000"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(767.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1823.6,0)">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(2326.6,0)">
                        <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2715.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3509.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(4510,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(5518.6,0)">
                        <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(6129.8,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(7130,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`with `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.109ex"
                      height="1.464ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 490 647"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` isolated on the left-hand side. From
there one can also distribute `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.24ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 4084 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(503,0)">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(892,0)">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(1686.2,0)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(2686.4,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(3695,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`,
obtaining (after putting “`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.18ex"
                      height="1.758ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -583 2289.6 777"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
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
                          <g data-mml-node="mo">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(778,0)">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="msub" transform="translate(1281,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`”`}
                </NoBreak>
                {` last)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.605ex"
                  height="1.783ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 7781.6 788"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(767.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1823.6,0)">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2326.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3120.8,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(4121,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(5269.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(6270,0)">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(6773,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`which has the form`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.353ex"
                  height="2.034ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -694 4576 899"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                    <path
                      id="MJX-1-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>
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
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(767.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1823.6,0)">
                        <use
                          data-c="1D44E"
                          xlink:href="#MJX-1-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2352.6,0)">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3146.8,0)">
                        <use data-c="2B" xlink:href="#MJX-1-TEX-N-2B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4147,0)">
                        <use
                          data-c="1D44F"
                          xlink:href="#MJX-1-TEX-I-1D44F"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`with `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.352ex"
                      height="1.758ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -583 2365.6 777"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                        <path
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
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
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1862.6,0)">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
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
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.269ex"
                      height="2.034ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -694 5423.1 899"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>
                        <path
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
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
                              data-c="1D44F"
                              xlink:href="#MJX-1-TEX-I-1D44F"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(706.8,0)">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1762.6,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(2911.3,0)">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(3911.6,0)">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(4414.6,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 3.`}</b>
              {`
Plot the vertical velocity of an object a
mosquito whose height over time is given by
this graph (use the same time interval as the
graph):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image
              class="pt-[22px] pb-[15px] pl-[90px]"
              src="/images/1.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={2}>
              <VerticalChunk>{`Here is the “official” graph of the (vertical)
velocity:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                class="pt-[21px] pb-[20px] pl-[46px]"
                src="/images/64.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`On each interval, the velocity is rate of
change of the height, i.e., the `}
                <i>{`slope`}</i>
                {` of
the height. For example, the rate of change
of the height is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.577ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.067ex"
                  height="4.613ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1342 5333.6 2039"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path>
                    <path
                      id="MJX-1-TEX-N-6D"
                      d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
                    <path
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,676)">
                            <g data-mml-node="mn">
                              <use
                                data-c="31"
                                xlink:href="#MJX-1-TEX-N-31"></use>
                            </g>
                            <g
                              data-mml-node="mtext"
                              transform="translate(500,0)">
                              <use
                                data-c="6D"
                                xlink:href="#MJX-1-TEX-N-6D"></use>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(439.5,-686)">
                            <g data-mml-node="mn">
                              <use
                                data-c="31"
                                xlink:href="#MJX-1-TEX-N-31"></use>
                            </g>
                            <g
                              data-mml-node="mtext"
                              transform="translate(500,0)">
                              <use
                                data-c="73"
                                xlink:href="#MJX-1-TEX-N-73"></use>
                            </g>
                          </g>
                          <rect width="1533" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2050.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(3106.6,0)">
                        <use data-c="31" xlink:href="#MJX-1-TEX-N-31"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(3606.6,0)">
                        <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(4439.6,0)">
                        <g data-mml-node="mo">
                          <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                        </g>
                      </g>
                      <g data-mml-node="mtext" transform="translate(4939.6,0)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`between `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.186ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.891ex"
                      height="1.717ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -677 1278 759"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                        <path
                          id="MJX-1-TEX-N-34"
                          d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mo">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(778,0)">
                            <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`s`}
                </NoBreak>
                {` and `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.186ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.891ex"
                      height="1.69ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -665 1278 747"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-2212"
                          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
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
                          <g data-mml-node="mo">
                            <use
                              data-c="2212"
                              xlink:href="#MJX-1-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(778,0)">
                            <use data-c="33" xlink:href="#MJX-1-TEX-N-33"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`s,`}
                </NoBreak>
                {` where the mosquito
goes up by one meter during a one second
period, so the vertical velocity is 1m`}
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
                          id="MJX-1-TEX-N-2F"
                          d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="mo">
                              <use
                                data-c="2F"
                                xlink:href="#MJX-1-TEX-N-2F"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`s
for that time interval, etc.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Note 1.`}</i>
                {`
As explained in Chapter 3, an empty circle of
this type`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_empty_circle_alone.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`indicates a “missing” value. Specifically, in
our case, the vertical velocity is `}
                <i>{`undefined`}</i>
                {`
wherever the graph of the height has a sharp
corner. (Because the slope of the graph is not
well-defined at such corners.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Note 2.`}</i>
                {`
For the time interval from `}
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
                  {`s`}
                </NoBreak>
                {` to `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.05ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.891ex"
                      height="1.557ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 1278 688"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                        <path
                          id="MJX-1-TEX-N-2E"
                          d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
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
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                            <use
                              data-c="2E"
                              xlink:href="#MJX-1-TEX-N-2E"
                              transform="translate(500,0)"></use>
                            <use
                              data-c="35"
                              xlink:href="#MJX-1-TEX-N-35"
                              transform="translate(778,0)"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`s,`}
                </NoBreak>
                {` the
slope is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.602ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.085ex"
                  height="4.638ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1342 7109.6 2050"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-6D"
                      d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
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
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-N-34"
                      d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                    <path
                      id="MJX-1-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,676)">
                            <g data-mml-node="mo">
                              <use
                                data-c="2212"
                                xlink:href="#MJX-1-TEX-N-2212"></use>
                            </g>
                            <g data-mml-node="mn" transform="translate(778,0)">
                              <use
                                data-c="32"
                                xlink:href="#MJX-1-TEX-N-32"></use>
                            </g>
                            <g
                              data-mml-node="mspace"
                              transform="translate(1278,0)"></g>
                            <g
                              data-mml-node="mtext"
                              transform="translate(1328,0)">
                              <use
                                data-c="6D"
                                xlink:href="#MJX-1-TEX-N-6D"></use>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(439.5,-686)">
                            <g data-mml-node="mn">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                              <use
                                data-c="2E"
                                xlink:href="#MJX-1-TEX-N-2E"
                                transform="translate(500,0)"></use>
                              <use
                                data-c="35"
                                xlink:href="#MJX-1-TEX-N-35"
                                transform="translate(778,0)"></use>
                            </g>
                            <g
                              data-mml-node="mspace"
                              transform="translate(1278,0)"></g>
                            <g
                              data-mml-node="mtext"
                              transform="translate(1328,0)">
                              <use
                                data-c="73"
                                xlink:href="#MJX-1-TEX-N-73"></use>
                            </g>
                          </g>
                          <rect width="2361" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2878.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(3934.6,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g
                        data-mml-node="mspace"
                        transform="translate(4712.6,0)"></g>
                      <g data-mml-node="mn" transform="translate(4782.6,0)">
                        <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                      </g>
                      <g
                        data-mml-node="mspace"
                        transform="translate(5282.6,0)"></g>
                      <g data-mml-node="mtext" transform="translate(5382.6,0)">
                        <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(6215.6,0)">
                        <g data-mml-node="mo">
                          <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                        </g>
                      </g>
                      <g data-mml-node="mtext" transform="translate(6715.6,0)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`and similarly for the time interval from
`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.05ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.891ex"
                      height="1.557ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 1278 688"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                        <path
                          id="MJX-1-TEX-N-2E"
                          d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path>
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
                            <use data-c="32" xlink:href="#MJX-1-TEX-N-32"></use>
                            <use
                              data-c="2E"
                              xlink:href="#MJX-1-TEX-N-2E"
                              transform="translate(500,0)"></use>
                            <use
                              data-c="35"
                              xlink:href="#MJX-1-TEX-N-35"
                              transform="translate(778,0)"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`s`}
                </NoBreak>
                {` to `}
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
                  {`s`}
                </NoBreak>
                {` the slope is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -1.602ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.173ex"
                  height="4.638ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -1342 5822.6 2050"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                    <path
                      id="MJX-1-TEX-N-6D"
                      d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path>
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
                      id="MJX-1-TEX-N-73"
                      d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path>
                    <path
                      id="MJX-1-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                    <path
                      id="MJX-1-TEX-N-34"
                      d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
                    <path
                      id="MJX-1-TEX-N-2F"
                      d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
                  </defs>
                  <g
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                        <g data-mml-node="mfrac">
                          <g
                            data-mml-node="mrow"
                            transform="translate(389.5,676)">
                            <g data-mml-node="mn">
                              <use
                                data-c="32"
                                xlink:href="#MJX-1-TEX-N-32"></use>
                            </g>
                            <g
                              data-mml-node="mspace"
                              transform="translate(500,0)"></g>
                            <g
                              data-mml-node="mtext"
                              transform="translate(550,0)">
                              <use
                                data-c="6D"
                                xlink:href="#MJX-1-TEX-N-6D"></use>
                            </g>
                          </g>
                          <g
                            data-mml-node="mrow"
                            transform="translate(220,-686)">
                            <g data-mml-node="mn">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                              <use
                                data-c="2E"
                                xlink:href="#MJX-1-TEX-N-2E"
                                transform="translate(500,0)"></use>
                              <use
                                data-c="35"
                                xlink:href="#MJX-1-TEX-N-35"
                                transform="translate(778,0)"></use>
                            </g>
                            <g
                              data-mml-node="mspace"
                              transform="translate(1278,0)"></g>
                            <g
                              data-mml-node="mtext"
                              transform="translate(1328,0)">
                              <use
                                data-c="73"
                                xlink:href="#MJX-1-TEX-N-73"></use>
                            </g>
                          </g>
                          <rect width="1922" height="60" x="120" y="220"></rect>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(2439.8,0)">
                        <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(3495.6,0)">
                        <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                      </g>
                      <g
                        data-mml-node="mspace"
                        transform="translate(3995.6,0)"></g>
                      <g data-mml-node="mtext" transform="translate(4095.6,0)">
                        <use data-c="6D" xlink:href="#MJX-1-TEX-N-6D"></use>
                      </g>
                      <g
                        data-mml-node="TeXAtom"
                        data-mjx-texclass="ORD"
                        transform="translate(4928.6,0)">
                        <g data-mml-node="mo">
                          <use data-c="2F" xlink:href="#MJX-1-TEX-N-2F"></use>
                        </g>
                      </g>
                      <g data-mml-node="mtext" transform="translate(5428.6,0)">
                        <use data-c="73" xlink:href="#MJX-1-TEX-N-73"></use>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`because `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.302ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 4111.6 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path>
                        <path
                          id="MJX-1-TEX-N-2F"
                          d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path>
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
                          id="MJX-1-TEX-N-3D"
                          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>
                        <path
                          id="MJX-1-TEX-N-34"
                          d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path>
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
                          <g
                            data-mml-node="TeXAtom"
                            data-mjx-texclass="ORD"
                            transform="translate(500,0)">
                            <g data-mml-node="mo">
                              <use
                                data-c="2F"
                                xlink:href="#MJX-1-TEX-N-2F"></use>
                            </g>
                          </g>
                          <g data-mml-node="mn" transform="translate(1000,0)">
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
                          <g data-mml-node="mo" transform="translate(2555.8,0)">
                            <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(3611.6,0)">
                            <use data-c="34" xlink:href="#MJX-1-TEX-N-34"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`.`}
                </NoBreak>
                {` (Think: `}
                <i>{`how many times`}</i>
                {`
does `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.05ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.891ex"
                      height="1.557ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 1278 688"
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
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
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
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` go into `}
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
                {`?)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 4.`}</b>
              {`
Digressing on the second-to-last equation
in the solution to Exercise 2, explain why`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              <svg
                style="vertical-align: -0.464ex;"
                xmlns="http://www.w3.org/2000/svg"
                width="8.282ex"
                height="1.783ex"
                role="img"
                focusable="false"
                viewBox="0 -583 3660.6 788"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="MJX-1-TEX-I-1D466"
                    d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                  <path
                    id="MJX-1-TEX-N-30"
                    d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                  <path
                    id="MJX-1-TEX-N-2212"
                    d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  <path
                    id="MJX-1-TEX-I-1D45D"
                    d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
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
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D466"
                          xlink:href="#MJX-1-TEX-I-1D466"></use>
                      </g>
                      <g
                        data-mml-node="mn"
                        transform="translate(523,-150) scale(0.707)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(1148.8,0)">
                      <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2149,0)">
                      <use data-c="1D45D" xlink:href="#MJX-1-TEX-I-1D45D"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(2652,0)">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D465"
                          xlink:href="#MJX-1-TEX-I-1D465"></use>
                      </g>
                      <g
                        data-mml-node="mn"
                        transform="translate(605,-150) scale(0.707)">
                        <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`is the `}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.464ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.109ex"
                    height="1.464ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -442 490 647"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-I-1D466"
                        d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    </defs>
                    <g
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      transform="scale(1,-1)">
                      <g data-mml-node="math">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
                {`-intercept`}
              </NoBreak>
              {` of the line of slope `}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.439ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.138ex"
                    height="1.439ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -442 503 636"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-I-1D45D"
                        d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    </defs>
                    <g
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      transform="scale(1,-1)">
                      <g data-mml-node="math">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D45D"
                            xlink:href="#MJX-1-TEX-I-1D45D"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
              </NoBreak>
              {`
through the point `}
              <NoBreak>
                <Math>
                  <svg
                    style="vertical-align: -0.566ex;"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.144ex"
                    height="2.262ex"
                    role="img"
                    focusable="false"
                    viewBox="0 -750 3157.8 1000"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        id="MJX-1-TEX-N-28"
                        d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                      <path
                        id="MJX-1-TEX-I-1D465"
                        d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                      <path
                        id="MJX-1-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                      <path
                        id="MJX-1-TEX-N-2C"
                        d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                      <path
                        id="MJX-1-TEX-I-1D466"
                        d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                        <g data-mml-node="mo">
                          <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(389,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D465"
                              xlink:href="#MJX-1-TEX-I-1D465"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(605,-150) scale(0.707)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1397.6,0)">
                          <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                        </g>
                        <g data-mml-node="msub" transform="translate(1842.2,0)">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                          <g
                            data-mml-node="mn"
                            transform="translate(523,-150) scale(0.707)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2768.8,0)">
                          <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Math>
              </NoBreak>
              {` by using a drawing
and “rise equals slope times run”.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={3}>
              <VerticalChunk>{`E.g.:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/66.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`The rise from the `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.109ex"
                      height="1.464ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 490 647"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`-intercept`}
                </NoBreak>
                {` to `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7.144ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 3157.8 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="msub" transform="translate(389,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(1397.6,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1842.2,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(2768.8,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`
is `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="3.42ex"
                      height="1.439ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 1511.6 636"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="msub" transform="translate(503,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`,`}
                </NoBreak>
                {` as found by “rise equals slope times
run”, implying that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.282ex"
                  height="1.783ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 3660.6 788"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
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
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1148.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2149,0)">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2652,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`is the `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.109ex"
                      height="1.464ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 490 647"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {`-intercept.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Note 1.`}</i>
                {` Our drawing makes some implicit
assumptions, such as `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.286ex"
                      height="1.946ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 2336.6 860"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                        <path
                          id="MJX-1-TEX-N-3E"
                          d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"></path>
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
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                          <g data-mml-node="mo" transform="translate(780.8,0)">
                            <use data-c="3E" xlink:href="#MJX-1-TEX-N-3E"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(1836.6,0)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
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
                      style="vertical-align: -0.375ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.43ex"
                      height="1.881ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -666 2842.1 831.6"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                        <path
                          id="MJX-1-TEX-N-3E"
                          d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(1286.3,0)">
                            <use data-c="3E" xlink:href="#MJX-1-TEX-N-3E"></use>
                          </g>
                          <g data-mml-node="mn" transform="translate(2342.1,0)">
                            <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`.`}
                </NoBreak>
                {` But`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.439ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.42ex"
                  height="1.439ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -442 1511.6 636"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
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
                      <g data-mml-node="mi">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(503,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`is the rise from the `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.109ex"
                      height="1.464ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 490 647"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`-intercept`}
                </NoBreak>
                {` to
`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.566ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7.144ex"
                      height="2.262ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -750 3157.8 1000"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-N-28"
                          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
                        <path
                          id="MJX-1-TEX-N-30"
                          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                        <path
                          id="MJX-1-TEX-N-2C"
                          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
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
                          <g data-mml-node="mo">
                            <use data-c="28" xlink:href="#MJX-1-TEX-N-28"></use>
                          </g>
                          <g data-mml-node="msub" transform="translate(389,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(1397.6,0)">
                            <use data-c="2C" xlink:href="#MJX-1-TEX-N-2C"></use>
                          </g>
                          <g
                            data-mml-node="msub"
                            transform="translate(1842.2,0)">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D466"
                                xlink:href="#MJX-1-TEX-I-1D466"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(523,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(2768.8,0)">
                            <use data-c="29" xlink:href="#MJX-1-TEX-N-29"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` regardless of the sign of `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.439ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.138ex"
                      height="1.439ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 503 636"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D45D"
                          d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D45D"
                              xlink:href="#MJX-1-TEX-I-1D45D"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` or
`}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.375ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.282ex"
                      height="1.375ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 1008.6 607.6"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
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
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` (because `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.375ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.282ex"
                      height="1.375ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 1008.6 607.6"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
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
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use
                                data-c="1D465"
                                xlink:href="#MJX-1-TEX-I-1D465"></use>
                            </g>
                            <g
                              data-mml-node="mn"
                              transform="translate(605,-150) scale(0.707)">
                              <use
                                data-c="30"
                                xlink:href="#MJX-1-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                </NoBreak>
                {` is the run in all cases),
making`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                <svg
                  style="vertical-align: -0.464ex;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.282ex"
                  height="1.783ex"
                  role="img"
                  focusable="false"
                  viewBox="0 -583 3660.6 788"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      id="MJX-1-TEX-I-1D466"
                      d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                    <path
                      id="MJX-1-TEX-N-30"
                      d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path>
                    <path
                      id="MJX-1-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                    <path
                      id="MJX-1-TEX-I-1D45D"
                      d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path>
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
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D466"
                            xlink:href="#MJX-1-TEX-I-1D466"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(523,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(1148.8,0)">
                        <use data-c="2212" xlink:href="#MJX-1-TEX-N-2212"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2149,0)">
                        <use
                          data-c="1D45D"
                          xlink:href="#MJX-1-TEX-I-1D45D"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2652,0)">
                        <g data-mml-node="mi">
                          <use
                            data-c="1D465"
                            xlink:href="#MJX-1-TEX-I-1D465"></use>
                        </g>
                        <g
                          data-mml-node="mn"
                          transform="translate(605,-150) scale(0.707)">
                          <use data-c="30" xlink:href="#MJX-1-TEX-N-30"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`the `}
                <NoBreak>
                  <Math>
                    <svg
                      style="vertical-align: -0.464ex;"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.109ex"
                      height="1.464ex"
                      role="img"
                      focusable="false"
                      viewBox="0 -442 490 647"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path
                          id="MJX-1-TEX-I-1D466"
                          d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>
                      </defs>
                      <g
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        transform="scale(1,-1)">
                        <g data-mml-node="math">
                          <g data-mml-node="mi">
                            <use
                              data-c="1D466"
                              xlink:href="#MJX-1-TEX-I-1D466"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Math>
                  {`-intercept`}
                </NoBreak>
                {` in all cases.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Chapter2>{" "}
    </>
  );
};
export default Article;
