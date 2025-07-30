class BlogPost {
    constructor(title, body, author, imageUrl) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.imageUrl = imageUrl;
        this.updateDate();
        this.getShortBody();
    }

    getShortBody() {
        return this.body.substring(0, 32) + "...";
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateBody(newBody) {
        this.body = newBody;
    }

    updateAuthor(newAuthor) {
        this.author = newAuthor;
    }

    updateImageUrl(newImageUrl) {
        this.imageUrl = newImageUrl;
    }

    updateDate() {
        const currentDate = new Date();
        const monthIndex = currentDate.getMonth();
        const day = currentDate.getDay();
        const year = currentDate.getFullYear();

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        this.date = `${monthNames[monthIndex]} ${day} ${year}`;
    }

}

export default BlogPost;