// let backApp = text("startapp?appId=60000002&url=%2Fwww%2Fhome").findOnce();
// backApp.click();
// console.log(backApp);

// let masen = text("蚂蚁森林").id("h5_tv_title").findOnce();
// console.log(masen);
let antFf = text("蚂蚁庄园").findOnce();
if (antFf) {
    antFf.click();
}