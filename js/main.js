const entriesArray = [
    {
        title: "Entrada 1",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur autem eius, doloremque aperiam eveniet deserunt mollitia eaque laborum perferendis!",
        createDate: "05/10/2019"
    },
    {
        title: "Entrada 2",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur autem eius, doloremque aperiam eveniet deserunt mollitia eaque laborum perferendis!",
        createDate: "05/10/2019"
    },
    {
        title: "Entrada 3",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur autem eius, doloremque aperiam eveniet deserunt mollitia eaque laborum perferendis!",
        createDate: "05/10/2019"
    },
    {
        title: "Entrada 4",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur autem eius, doloremque aperiam eveniet deserunt mollitia eaque laborum perferendis!",
        createDate: "05/10/2019"
    },
    {
        title: "Entrada 5",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur autem eius, doloremque aperiam eveniet deserunt mollitia eaque laborum perferendis!",
        createDate: "05/10/2019"
    }
]


/*
$("#sample-card-title").text(entryObj.title);
$("#sample-card-content").text(entryObj.content);
$("#sample-card-date").text(`Creation Date ${entryObj.createDate}`)
*/

/*
for (index = 0; index < $(".card").length; index++){
    $(`.card:eq(${index}) .card-title`).text(entriesArray[index].title);
    $(`.card:eq(${index}) .card-text`).text(entriesArray[index].content);
    $(`.card:eq(${index}) .card-date`).text(entriesArray[index].createDate);
}
*/

const card =
`<div class="col-12 col-lg-6">
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="https://picsum.photos/200" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 id="sample-card-title" class="card-title">Card title</h5>
                    <p id="sample-card-content" class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p id="sample-card-date" class="card-text"><small class="card-date">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>      
</div>`


entriesArray.forEach(({title, content, date}, index) => {
    $(`.card-wrapper`).append(card);
    $(`.card:eq(${index}) .card-title`).text(title);
    $(`.card:eq(${index}) .card-text`).text(content);
    $(`.card:eq(${index}) .card-date`).text(date)

})



