const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
// 编译less
gulp.task('less', function () {
    // console.log(gulp);
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('cc4j.css'))
        .pipe(gulp.dest('../dist/lib/css'));
});

// 拷贝字体文件
// gulp.task('fonts', function () {
//     gulp.src('../src/styles/common/iconfont/fonts/*.*')
//         .pipe(gulp.dest('../dist/styles/fonts'));
// });

gulp.task('default', ['less']);
