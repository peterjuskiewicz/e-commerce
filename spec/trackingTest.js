describe("Tracking", function() {

    var recommender

    beforeEach(function(){
        recommender = new Recommender()
    });

    it("Time should be set to 10s", function(){

        expect(recommender.timeWindow).toBe(10000);
    });

    it("Should add keyword", function(){

        recommender.addKeyword('test');

        expect(recommender.keywords['test']).toBeDefined();
    });

    it("Should return top keyword", function(){

        recommender.keywords['top'] = {count: 10, date: new Date().getTime()};
        recommender.keywords['test1'] = {count: 9, date: new Date().getTime()};
        recommender.keywords['test2'] = {count: 8, date: new Date().getTime()};
        recommender.keywords['test3'] = {count: 7, date: new Date().getTime()};

        var topKeyword = recommender.getTopKeyword();

        expect(topKeyword).toBe('top');
    });

    it("Should have keywords", function(){

        expect(recommender.keywords).toBeDefined();
    });

    it("Should save to local storage", function(){

        recommender.save();

        expect(localStorage.recommenderKeywords).toBeDefined();
    });
});



