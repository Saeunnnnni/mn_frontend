import ReactPaginate from 'react-paginate';
import './PartyDetail.css';

// 백엔드와 연동할 데이터 모음
const data = {
    mainImg: "https://recipe1.ezmember.co.kr/cache/recipe/2019/08/21/f51404dc513ccc76be4b5668f5dd350b1.jpg",
    title: "오늘은 뽀삐의 생일입니다. 축하해주세요!",
    desc: "벌써 10살이 된 뽀삐, 항상 건강하게 오래 살아줘!",
    subImg: "https://recipe1.ezmember.co.kr/cache/recipe/2023/08/09/a393d884c9710311dca36a5e0a9bc1dc1.jpg",
    insight: {
        like: 150,
        reply: 5,
        view: 12500
    },
    user: {
        thumb: "https://randomuser.me/api/portraits/med/men/52.jpg",
        name: "블루베리"
    },
    reply: [
        {
            thumb: "https://randomuser.me/api/portraits/med/men/50.jpg",
            name: "strawberry",
            content:
                "생일 축하해 뽀삐야! 다음에 또 생일 축하하자!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        },
        {
            thumb: "https://randomuser.me/api/portraits/med/men/49.jpg",
            name: "bbbbbb",
            content:
                "ㅠㅠ 10살이라니 ㅠㅠ 저희 집 강아지도 10살인데 너무 공감되네요 ㅠㅠ\n항상 건강하게 살렴!",
            createdAt: "2023.08.11"
        }
    ]
};

// 페이지 로딩 시 출력되는 화면내용
export default function Page(){
    return(
        <main className="party_detail_main">
            <div className="party_detail_main_image_container">
                {/* 축하파티 사진 */}
                <img src={data.mainImg} alt="main party" />
            </div>
            <div className="party_detail_summary">
                {/* 새 글 등록 시 제목 부분 */}
                <h2>{data.title}</h2>
                {/* 부제목이자 제목에 대한 부연 설명 */}
                <p>{data.desc}</p>
            </div>
            <div className="party_detail_sub_image_container">
                <div>
                    {/* 강아지 축하사진 */}
                    <img src={data.subImg} alt="sub party" />
                </div>
                {/* 해당 detail 페이지가 받은 좋아요, 댓글, 조회수 표시 */}
                <div className="party_detail_insight">
                    <div>좋아요 {data.insight.like.toLocaleString()}</div>
                    <div>댓글 {data.insight.reply.toLocaleString()}</div>
                    <div>조회 {data.insight.view.toLocaleString()}</div>
                </div>
                <div className="party_detail_user">
                    <div>
                        {/* 작성자 프로필 사진 */}
                        <img src={data.user.thumb} />
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
            {/* 구분선 */}
            <Divider />
            <div className="party_detail_reply">
                {/* 총 댓글 수 표시 */}
                <div className="title">댓글 {data.reply.length}</div>
                {/* 댓글 입력창 */}
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
                {data.reply.map((item, index)=> (
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
    return <div className="party_detail_divider" />;
}

// 댓글을 생성하는 function
function ReplyItem({thumb, name, content, createdAt}){
    return(
        <div className="party_datail_reply_item">
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