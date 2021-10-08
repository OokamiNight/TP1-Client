/*
    Méthodes d'accès aux services Web API BookmarksManager
 */

const apiBaseURL= "http://localhost:5000/api/Bookmarks";
//const apiBaseURL= "https://three-ethereal-castanet.glitch.me/api/Bookmarks";

function webAPI_getBookmarks( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: Bookmarks => {  successCallBack(Bookmarks);
                                console.log("webAPI_getBookmarks - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmarks - error");
        }
    });
}

function webAPI_getBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: Bookmark => { successCallBack(Bookmark); console.log("webAPI_getBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}
function webAPI_addBookmark( Bookmark, successCallBack, errorCallBack) {
    console.log('add', Bookmark)
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(Bookmark),
        success: () => {successCallBack();  console.log("webAPI_addBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addBookmark - error");
        }
    });
}

function webAPI_modifyBookmark( Bookmark, successCallBack, errorCallBack) {
    console.log('modify', Bookmark)
    $.ajax({
        url: apiBaseURL + "/" + Bookmark.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(Bookmark),
        success:() => {successCallBack();  console.log("webAPI_modifyBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifyBookmark - error");
        }
    });
}

function webAPI_deleteBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_deleteBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deleteBookmark - error");
        }
    });
}
