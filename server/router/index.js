import Router from 'koa-router';
import mongoose from 'mongoose';



let router = new Router({
    prefix: '/api/v0'
})

router.get('/movies/all', async (ctx, next) => {
    const Movie = mongoose.model('Movie')
    const movies = await Movie.find({}).sort({
        'meta.cratedAt': -1
    })
    ctx.body = {
        movies
    }
})

router.get('/movie/:id', async (ctx, next) => {
    const Movie = mongoose.model('Movie')
    const id = ctx.params.id
    const movie = await Movie.findOne({_id: id})
    ctx.body = {
        movie
    }
})


module.exports = router