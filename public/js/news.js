let news = [
    ['2023-09-29', 'Special Announcement', '#'],
    ['2023-03-13', 'Special Announcement', '#'],
    ['2023-02-28', 'Special Announcement', '#'],
    ['2023-01-20', 'Special Announcement', '#'],
    ['2022-12-23', 'Special Announcement', '#'],
    ['2022-12-22', 'Special Announcement', '#'],
    ['2022-11-16', 'Special Announcement', '#'],
    ['2022-11-02', 'Special Announcement', '#'],
    ['2022-11-02', 'Special Announcement', '#'],
    ['2022-11-02', 'Special Announcement', '#'],
    ['2022-10-26', 'Special Announcement', '#'],
    ['2022-10-14', 'Special Announcement', '#'],
    ['2022-09-09', 'Special Announcement', '#'],
    ['2022-08-24', 'Special Announcement', '#'],
    ['2022-04-13', 'Special Announcement', '#'],
    ['2022-03-03', 'Special Announcement', '#'],
    ['2022-02-18', 'Special Announcement', '#'],
    ['2022-02-07', 'Special Announcement', '#'],
    ['2022-02-05', 'Special Announcement', '#'],
    ['2022-01-29', 'Special Announcement', '#'],
    ['2022-01-21', 'Special Announcement', '#'],
    ['2021-12-24', 'Special Announcement', '#'],
    ['2021-12-24', 'Special Announcement', '#'],
    ['2021-11-25', 'Special Announcement', '#'],
    ['2021-11-25', 'Special Announcement', '#'],
    ['2021-10-25', 'Special Announcement', '#'],
    ['2021-10-13', 'Special Announcement', '#'],
    ['2021-10-13', 'Special Announcement', '#']
]

$(".news-table").html(function (){
    let table = '<tr><th>Date</th><th>Title</th></tr>'
    for(let i=0; i<news.length;i++){
        table+=`<tr><td>${news[i][0]}</td><td><a href="${news[i][2]}">${news[i][1]}</a></td></tr>`
    }
    return table
})