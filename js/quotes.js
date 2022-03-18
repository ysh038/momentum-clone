const quotes = [
    {
quote: " 삶이 있는 한 희망은 있다.",
author: "키케로",
    },
    {
quote: "산다는것 그것은 치열한 전투이다.",
author: "로망로랑",
    },
    {
quote: "신은 용기있는자를 결코 버리지 않는다.",
author: "켄러",
    },
    {
quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
author: "이드리스 샤흐",
    },
    {
quote: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다. ",
author: "괴테",
    },
    {
quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
author: "마크 트웨인",
    },
    {
quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
author: "헬렌 켈러",
    },
    {
quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
author: "탈무드 격언",
    }
]

const quote_parent = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

function writeQuotes(){
    quote.innerText = todaysQuote.quote;
    author.innerText = " - " + todaysQuote.author;
    quote_parent.classList.remove(HIDDEN_CLASSNAME);
    quote_parent.classList.add(FADEIN_CLASSNAME);
}
