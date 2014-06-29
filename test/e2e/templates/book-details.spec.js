describe("Book details view test", function () {

    beforeEach(function () {
        browser().navigateTo("/");
    });

    it("should show the correct book details"), function(){
        browser().navigateTo("#/books/123");

        expect(element(".book-title").html()).toBe("Test123");

    };

});