const expect = require('chai').expect; 
const request = require('supertest'); 


const app = require('../../../index')

describe('POST /arithmatic/add', ()=>{
    it('OK, calling add method',(done)=>{
        request(app).post('/arithmatic/add')
        .send({elm:[1,2,3]})
        .then(res=>{
            const body = res.body; 
            expect(body).to.contain.property('sum')
            expect(body.sum).to.equal(6)
            done()
        }).catch(err=> done(err))
    })

    it('OK, calling add method',(done)=>{
        request(app).post('/arithmatic/add')
        .send({elm:[1,2,3]})
        .then(res=>{
            const body = res.body; 
            expect(body).to.contain.property('sum')
            expect(body.sum).not.equal(1)
            done()
        }).catch(err=> done(err))
    })
})

describe('POST /arithmatic/subtract', ()=>{
    it('OK, calling subtract method',(done)=>{
        request(app).post('/arithmatic/subtract')
        .send({elm:[4,2]})
        .then(res=>{
            const body = res.body; 
            expect(body).to.contain.property('diff')
            expect(body.diff).to.equal(2)
            done()
        }).catch(err=> done(err))
    })
})


describe('POST /arithmatic/multiply', ()=>{
    it('OK, calling multiply method',(done)=>{
        request(app).post('/arithmatic/multiply')
        .send({elm:[1,2,3]})
        .then(res=>{
            const body = res.body; 
            expect(body).to.contain.property('product')
            expect(body.product).to.equal(6)
            done()
        }).catch(err=> done(err))
    })
})