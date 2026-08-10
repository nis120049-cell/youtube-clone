function searchVideo() {

    const input =
        document.getElementById("searchInput");

    const keyword =
        input.value.toLowerCase().trim();

    const videos =
        document.querySelectorAll(".video-card");


    videos.forEach(video => {

        const title =
            video.dataset.title.toLowerCase();


        if (title.includes(keyword)) {

            video.style.display = "block";

        } else {

            video.style.display = "none";

        }

    });

}
