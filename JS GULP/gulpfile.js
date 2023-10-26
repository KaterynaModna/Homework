
const { src, dest, watch } = require('gulp');
const saas = require('browser-sync').create();
const browserSync = require('browser-sync').create();
function serve(){
        browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
    }

    function styles(){
        return src('app/styles/**/*.scss')
        
    }
watch('app/**/*.html',moveHtml).on('change', browserSync.reload);
exports.serve=serve;




function moveHtml(){
return src('app/index.html')
    .pipe(dest('build/'))

}
exports.moveHtml = moveHtml;