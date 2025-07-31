class BlogPost {
    constructor(title, body, author, imageUrl) {
        this.title = title;
        this.content = body;
        this.author = author;
        this.imageUrl = imageUrl;
        this.updateDate();
    }

    getShortTitle() {
        if (this.title.length < 18) {
            return this.title;
        }
        return this.title.substring(0, 18) + "...";
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateBody(newContent) {
        this.content = newContent;
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