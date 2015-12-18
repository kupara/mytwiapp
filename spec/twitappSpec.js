(function () {
    var request = require('request'),
        urlBase = 'https://mytwiapp.herokuapp.com/';
        

    describe('Unit tests for Twits REST API: ', function () {

        // Test for base url

        it('GET / should return status code 200', function (done) {

            request.get(urlBase, function (error, response, body) {

                if (!error) {

                    expect(response.statusCode).toBe(200);
                    done();

                } else {
                    throw error;
                }

            });

        });

        // Tests for users GET methods

        it('GET /api/posts a JSON object containing' +
            ' an Arrays of posts.', function (done) {

                request.get(urlBase + 'api/posts', function (error, response, body) {

                    if (!error) {

                       // expect(response.statusCode).toBe(200);

                        if (typeof body === 'string')
                            body = JSON.parse(body);

                        expect(Array.isArray(body)).toBeTruthy();

                        done();

                    }
                  //  expect(response.statusCode).toBe(500);

                }).auth("qwerty", "qwerty", true);
        });

        // Test for posts POST method

        it('POST /api/posts should add a post to the database and return a JSON' +
            ' object containing the post that was added', function (done) {
                var sampleTweet = {
                    text: "qwerty"
                }
                request.post({url: urlBase + '/api/posts', form: sampleTweet}, function (error, response, body) {

                    if (!error) {

                      //  expect(response.statusCode).toBe(201);

                        if (typeof body === 'string')
                            body = JSON.parse(body);

                       // expect(body.success).toBeTruthy();
                        expect(body.posts.text).toBe(sampleTweet.text);

                        done();

                    } else {
                        throw error;
                    }

                }).auth("qwerty", "qwerty", true);
        });
    });

})();
