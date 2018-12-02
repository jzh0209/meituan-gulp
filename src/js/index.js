$(function() {
            new Swiper('.swiper-container');

            $.ajax({
                url: 'api/swiper',
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    if (res.code === 1) {
                        //渲染swiper
                        renderSwiper(res.data);
                    }
                }
            })

            function renderSwiper(data) {
                var str = '';
                data.forEach(function(item) {
                            str += `
                <div class='swiper-slide'>`
                            str += renderIcon(item.list);
                            // <dl>
                            //     <dt><img src="images/1.png"></dt>
                            //     <dd>美食</dd>
                            // </dl>
                            `</div>`
                            `;
        })
        $('.swiper-wrapper').html();
    }

    function renderIcon(list){
        return list.map(function(item){
            return ` < dl >
                                <
                                dt > < img src = "images/a1.png"
                            alt = "" > < /dt> <
                            dd > 华莱士 < /dd> < /
                            dl > `
        }).join('')
    }
})