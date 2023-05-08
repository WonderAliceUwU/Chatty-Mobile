const sidebarButton = document.getElementById('sidebar-button');
const body = document.getElementById('lobby-body')
sidebarButton.addEventListener('click', toggleSidebar);
let toggled = false;
// Toggle sidebar visibility
function toggleSidebar() {
    if(toggled === false){
        body.style.gridTemplateColumns = '60% 100%'
        document.getElementById('side-menu-content').style.visibility = 'visible'
        document.getElementById('profile-settings').style.visibility = 'visible'
        document.getElementById('feed-input').style.marginLeft = '16.5rem'
        toggled = true
    }
    else{
        body.style.gridTemplateColumns = '0% 100%'
        document.getElementById('side-menu-content').style.visibility = 'hidden'
        document.getElementById('profile-settings').style.visibility = 'hidden'
        document.getElementById('feed-input').style.marginLeft = '0rem'
        toggled = false
    }
}

function newMessage() {
    let today = new Date
    let time = today.getHours() + ":" + today.getMinutes()
    let friend = document.getElementById('visitedName').textContent
    if (friend === from) {
        applyMessage(text, time)
        fetch(`http://localhost:3000/read-friend?token=${localStorage.getItem('token')}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({friend}),
        });
    } else {
        const friendElements = document.querySelectorAll('.friend-name');
        let friendElement;

        for (const element of friendElements) {
            if (element.textContent === from) {
                friendElement = element;
                break;
            }
        }
        friendElement.parentNode.className = 'unread-button'
    }
}
function applyUnread() {
    const friendElements = document.querySelectorAll('.friend-name');
    let friendElement;

    for (const element of friendElements) {
        if (element.textContent === from) {
            friendElement = element;
            break;
        }
    }
    friendElement.parentNode.className = 'unread-button'
}

function applyMessage(text, time) {
    let parent = document.getElementById('chat-div')
    let feedMessage = document.createElement('div')
    let feedBackground = document.createElement('div')
    let feedText = document.createElement('div')
    let chatHour = document.createElement('div')

    feedText.textContent = text
    chatHour.className = 'chat-hour'
    chatHour.textContent = time
    feedMessage.className = 'friend-message'
    feedBackground.className = 'friend-message-background'
    feedText.className = 'friend-message-content'
    chatHour.style.textAlign = "left"


    parent.appendChild(feedMessage)
    feedMessage.appendChild(chatHour)
    feedMessage.appendChild(feedBackground)
    feedBackground.appendChild(feedText)

    let feed = document.getElementById('lobby-feed')
    feed.scrollTop = feed.scrollHeight - feed.clientHeight;
}

function openFriends() {
    location.href = "../Friends/friends.html"
}

function openMain() {
    location.href = "../Main/main.html"
}

function openSettings() {
    localStorage.setItem("setting", "General")
    location.href = "../Settings/settings.html"
}

function openChat(friendName) {
    localStorage.setItem("userdata", friendName)
    location.href = '../Chat/chat.html';
}

async function getProfileUrl(username) {
    const response = await fetch(`http://localhost:3000/request-pfp-url`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username}),
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data.url)
        return data.url;
    }
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {month: 'long'});
}


async function appendFriendList(mode) {
    const response = await fetch(`http://localhost:3000/request-list-friend?token=${localStorage.getItem('token')}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });

    const respondeUnreads = await fetch(`http://localhost:3000/request-unreads?token=${localStorage.getItem('token')}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });
    if (!response.ok) {
        console.log("Error when loading feed")
        throw new Error('request failed');
    }
    if (response.ok) {
        const data = await response.json();
        let unreads;
        if (respondeUnreads.ok) {
            const dataUnreads = await respondeUnreads.json();
            unreads = dataUnreads.unreads;
            console.log(unreads)
        }
        const friendships = data.friends;
        for (let i = friendships.length - 1; i >= 0; i--) {
            let url
            let username = friendships[i].username
            const responsePFP = await fetch(`http://localhost:3000/request-pfp-url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username}),
            })
            if (responsePFP.ok) {
                const data = await responsePFP.json();
                url = data.url
            }

            let parent = document.getElementById('side-menu-content')

            let userItem = document.createElement('div')
            let friendButton = document.createElement('button')
            let pfp = document.createElement('img')
            let friendName = document.createElement('medium')
            let friendStatus = document.createElement('div')

            userItem.className = 'user-item'
            friendButton.className = 'friend-button'

            for (let j = unreads.length - 1; j >= 0; j--) {
                if (unreads[j].friend === friendships[i].username) {
                    friendButton.className = 'unread-button'
                }
            }

            friendName.className = 'friend-name'
            pfp.className = 'user-pfp'
            pfp.src = "http://localhost:3000" + url
            friendStatus.className = 'friend-status'

            friendName.textContent = friendships[i].username
            friendStatus.textContent = friendships[i].status


            parent.appendChild(userItem)
            userItem.appendChild(friendButton)
            friendButton.appendChild(pfp)
            friendButton.appendChild(friendName)
            friendButton.appendChild(friendStatus)

            friendButton.addEventListener("click", function () {
                localStorage.setItem("userdata", friendName.textContent + " " + friendStatus.textContent)
                location.href = '../Chat/chat.html';
            });

            if (mode === 'chat') {
                if (friendName.textContent === localStorage.getItem("userdata").split(" ")[0]) {
                    friendButton.id = "visitedButton"
                    friendName.id = 'visitedName'
                    friendButton.role = "button"
                }
            }
        }
    }
}
