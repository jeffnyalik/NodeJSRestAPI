let chai = require('chai');
let chaiHttp = require('chai-http');

require('../server');
const devUrl = require('../constants/const');
const models  = require('../models');

chai.use(chaiHttp);
chai.should();

describe('Posts API', () =>{
    /**
     * testing wrong url endpoint
     * 
     * */ 
    describe('Wrong URl endpoint', () =>{
        it('should not get right url', (done) =>{
            chai.request(devUrl.DEV_URL)
                .get('/api/posts')
                .end((err, res) =>{
                    res.should.have.status(404);
                done();
                });
        });
    });

    /**
     * Test the GET route
     */
    describe('GET  all posts', () =>{
        it('should get all the posts', (done) =>{
            chai.request(devUrl.DEV_URL)
            .get('api/posts')
            .end((err, res) =>{
                res.should.have.status(200);
            done();
            });
        });
    });

    /**
     * Test single GET route
     */
    describe('GET single post /api/:id', () =>{
        it('should get a single post', (done) =>{

            let posts = {
                title: "new title",
                content: "test content",
                imageUrl: "http://img.png",
                categoryId: 1,
                userId: 1,
                id: 1,
            };

            chai.request(devUrl.DEV_URL)
                .get('api/posts/:ids')
                .send(posts)
                .end((err, res) =>{
                    res.should.have.status(200);
                    
                done();
                })
        })
    })

    /**
     * Test the POST route
     */

    /**
     * Test the POST route
     */

    /**
     * Test the DELETE route
     */
});