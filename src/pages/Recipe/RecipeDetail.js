// RecipeDetail.js

import "./RecipeDetail.css";
import ReactPaginate from "react-paginate";

// 백엔드와 연동할 데이터 모음
const data = {
  mainImg:
    "https://recipe1.ezmember.co.kr/cache/recipe/2019/08/21/f51404dc513ccc76be4b5668f5dd350b1.jpg",
  title: "쉽고 빠르게, 더운 여름에 만들어 먹기 좋은 강아지용 냉면",
  desc: "나만 먹기 눈치 보일 때 ! 강아지도 같이 호로록 시원하게 먹고 싶을 때!\n콩물로 쉽고 건강하게 먹을 수 있는 반려견용 멍냉면을 만들어 볼까요 !  10분이면 요리 끝 !",
  info: {
    amount: "1마리",
    time: "10분 이내",
    diffi: "난이도 중",
  },
  ingre: "콩국물 500ml, 소면 동전크기만큼, 오이 반절, 고명 간식 조금",
  step: [
    {
      desc: "준비한 재료를 잘 씻어줍니다. 물 500ml을 냄비에 준비해둡니다.",
      img: "https://recipe1.ezmember.co.kr/cache/recipe/2023/08/09/a393d884c9710311dca36a5e0a9bc1dc1.jpg",
      ingre:
        "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/14/60d56df3fea1b0502da32e68c2d8f5ee1.jpg",
    },
  ],
  insight: {
    like: 150,
    reply: 5,
    view: 12500
  },
  user: {
    thumb: "https://randomuser.me/api/portraits/med/men/52.jpg",
    name: "블루베리",
  },
  reply: [
    {
      thumb: "https://randomuser.me/api/portraits/med/men/50.jpg",
      name: "Bruuuiu",
      content:
        "강아지가 너무 좋아해요ㅠㅠ 이렇게 간편하게 만들 수 있나니...\n작성님 항상 건강하시구 행복한 하루되세요!",
      createdAt: "2023.07.25",
    },
    {
      thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
      name: "aaaaaaa",
      content:
        "가슴이 웅장해진다..\n요리 못하는 저에게는 큰 빛, 구원...\n내일 꼭 해먹어여 보겠습니다 ㅋㅋ\n구독하러 갈게요 ㅎㅎ",
      createdAt: "2023.07.25",
    },
  ],
};

// 페이지 로딩 시 출력되는 화면내용
export default function Page() {
  return (
    <main className="recipe_detail_main">
      <div className="recipe_detail_image_container">
        {/* 메인 이미지 */}
        <img src={data.mainImg} alt="main recipe" />
      </div>
      <div className="recipe_detail_summary">
        {/* 새 글 등록 시 제목 부분 */}
        <h2>{data.title}</h2>
        {/* 부제목이자 제목에 대한 부연 설명 */}
        <p>{data.desc}</p>
        {/* 마리 수, 소요 시간, 난이도 모음 */}
        <div className="recipe_detail_info">
          <div>
            <div>
              <img src="/images/amount.png" alt="amount logo"></img>
            </div>
            {/* 마리 수 */}
            <div>{data.info.amount}</div>
          </div>
          <div>
            <div>
              <img src="/images/time.png" alt="info logo"></img>
            </div>
            {/* 소요 시간 */}
            <div>{data.info.time}</div>
          </div>
          <div>
            <div>
              <img src="/images/diffi.png" alt="difficulty logo"></img>
            </div>
            {/* 난이도 */}
            <div>{data.info.diffi}</div>
          </div>
        </div>
      </div>
      {/* 구분선 */}
      <Divider />
      {/* 요리에 필요한 재료와 양에 대한 정보 */}
      <div className="recipe_detail_ingre">
        <span className="title">재료</span>
        <span>{data.ingre}</span>
      </div>
      <Divider />
      <div className="recipe_detail_step">
        <div className="title">조리순서</div>
        {/* 조리 순서대로 사진과 설명, 해당 순서에서 필요한 재료를 나열 */}
        {data.step.map((item, index) => (
          <StepItem key={index} {...item} />
        ))}
        {/* 해당 detail 페이지가 받은 좋아요, 댓글, 조회수 표시 */}
        <div className="recipe_detail_insight">
          <div>좋아요 {data.insight.like.toLocaleString()}</div>
          <div>댓글 {data.insight.reply.toLocaleString()}</div>
          <div>조회 {data.insight.view.toLocaleString()}</div>
        </div>
        <div className="recipe_detail_user">
          <div>
            {/* 작성자 프로필 사진 */}
            <img src={data.user.thumb} alt="user thumb" />
          </div>
          {/* 작성자 닉네임 */}
          <div className="title">{data.user.name}</div>
          {/* 팔로우 버튼 */}
          <button>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 -960 960 960"
                width="16"
              >
                <path
                  fill="#f4f4f4"
                  d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"
                />
              </svg>
            </span>
            팔로우
          </button>
        </div>
      </div>
      <Divider />
      <div className="recipe_detail_reply">
        {/* 총 댓글 수 표시 */}
        <div className="title">댓글 {data.reply.length}</div>
        {/* 댓글 입력 창 */}
        <div className="input">
          <div>
            <img
              src={"https://randomuser.me/api/portraits/med/men/47.jpg"}
              alt="user thumb"
            />
          </div>
          <input />
          <span>등록</span>
        </div>
        {/* 등록된 댓글 나열 */}
        {data.reply.map((item, index) => (
          <ReplyItem key={index} {...item} />
        ))}
        {/* 페이징 처리 */}
        <ReactPaginate
          // 총 게시글의 수
          pageCount={5}
          // 한 페이지에 표시할 게시글 수
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          // 페이지 수가 많을 경우 건너뛸 수 있는 버튼
          breakLabel="..."
          // 다음 페이지로 가는 버튼의 value
          nextLabel={<Next />}
          // 이전 페이지로 가는 버튼의 value
          previousLabel={<Prev />}
          className="paginate"
          pageClassName="page-item"
          // 이전 버튼 css 적용을 위한 className
          previousClassName="page-item"
          // 다음 버튼 css 적용을 위한 className
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="np"
          nextLinkClassName="np"
        />
      </div>
    </main>
  );
}

// 구분선
function Divider() {
  return <div className="recipe_detail_divider" />;
}

// 조리 순서를 배열로 나타낸 function
function StepItem({ desc, img, ingre }) {
  return (
    <div className="recipe_detail_step_item">
      <p>{desc}</p>
      <img src={img} alt="desc img" />
      <div className="ingre_container">
        <div>
          <img src={ingre} alt="ingre img" />
        </div>
      </div>
    </div>
  );
}

// 댓글을 생성하는 function
function ReplyItem({ thumb, name, content, createdAt }) {
  return (
    <div className="recipe_detail_reply_item">
      <div className="image_container">
        <img src={thumb} alt="reply thumb" />
      </div>
      <div>
        <div className="insight">
          <span>{name}</span>
          <span>{createdAt}</span>
          <span>답글</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

// 페이징 처리에서 next function
function Next() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#909090"
        d="M15.8 43.9L13 41.05L30.15 23.9L13 6.75002L15.8 3.90002L35.8 23.9L15.8 43.9Z"
      />
    </svg>
  );
}

// 페이징 처리에서 prev function
function Prev() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#909090"
        d="M33 44L13 24L33 4L35.8 6.85L18.65 24L35.8 41.15L33 44Z"
      />
    </svg>
  );
}