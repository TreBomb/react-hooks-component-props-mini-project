import Article from "./Article";

function ArticleList({ list }) {
    const articles = list.map(item => {
        return <Article key={item.id} title={item.title} date={item.date} preview={item.preview} />
    })

    return <main>{articles}</main>
}

export default ArticleList;