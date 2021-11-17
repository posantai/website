const getData = async (platform) => {
    try {
        let res = null;
        switch (platform) {
            case 'fb':
                res = await fetch('/assets/json/fb.json');
                break;

            case 'ig':
                res = await fetch('/assets/json/ig.json');
                break;

            case 'dc':
                res = await fetch('/assets/json/discord.json');
                break;
        }
        const toJSON = await res.json();
        const toHtml = toJSON.map(item => {
            return `
            <tr>
                <td>${item.nama ? item.nama : item.name}</td>
                <td>${item.posisi}</td>
            </tr>
        `;
        });

        return toHtml;
    } catch (err) {
        console.log(err);
    }
}

$('.staff').on('click', async function () {
    Swal.fire({
        imageUrl: '/assets/css/images/staff2.png',
        imageAlt: 'A staff member',
        width: '600px',
        html: `
        <div class="row">
            <div class="col-md-12">
                <h2 class="swal2-title">Owner</h2>
            </div>

            <div class="col-md-12">
                <p class="swal2-text text-middle">
                    Muhammad Zulfikar
                </p>
                <br>
            </div>

            <div class="card" style="width: 600px;">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" id="fb">Facebook & Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="dc">Discord</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="ig">Instagram</a>
                        </li>
                    </ul>
                </div>

                <div class="card-body">
                    <div class="row>">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nama</th>
                                            <th>Posisi</th>
                                        </tr>
                                    </thead>

                                    <tbody id="staff-table">
                                        ${(await getData('fb')).join('\n')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });
});



$('.about').on('click', function () {
    Swal.fire({
        scrollbarPadding: false,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i>',
        confirmButtonColor: '#000000',
        imageAlt: 'Ikhsan',
        imageUrl: '/assets/css/images/about.png',
        width: '600px',
        html: `
        <div class="row">
            <div class="col-md-12">
                <h2 class="swal2-title text-left">Apa itu POS?</h2>
            </div>

            <div class="col-md-12">
                <p class="text-justify">
                    POS yang kepanjangannya Perkumpulan Orang Santai adalah komunitas hiburan yang berbasis santai. Senin? gw sih santai.
                </p>
                <br>
                <br>
            </div>

            <div class="col-md-12">
                <h2 class="swal2-title text-left">Siapa yang memberikan nama komunitas ini?</h2>
            </div>
            <div class="col-md-12">
                <p class="text-justify">
                    Mehmet Ali, Wahyu Purnomo, Miftahul Fikri.
                </p>

                <br>
                <br>
            </div>

            <div class="col-md-12">
                <h2 class="swal2-title text-left">Siapa yang membuat logo POS?</h2>
            </div>
            <div class="col-md-12">
                <p class="text-justify">
                    Rayhan Aswi (Cawfein)
                </p>

                <br>
                <br>
            </div>
                
            <div class="col-md-12">
                <h2 class="swal2-title text-left">Kapan POS dibuat?</h2>
            </div>
            <div class="col-md-12">
                <p class="text-justify">
                    POS Discord dibuat pada awal Bulan Oktober 2018 sedangkan POS Facebook dibuat pada pertengahan
                    November 2018.
                </p>
    
                <br>
                <br>
            </div>

            <div class="col-md-12">
                <h2 class="swal2-title text-left">Bagaimana POS bisa terbentuk?</h2>
            </div> 
            <div class="col-md-12">
                <p class="text-justify">
                    Saat bulan September 2018 Ijul telah mundur dari suatu komunitas dan para sisa staffnya di
                    platform Discord, yang sekarang tidak memiliki nama.
                </p>
                <br>
                <p class="text-justify">
                    Pada tanggal 9-10 Oktober 2018 staff discord mendiskusikan untuk mencari nama, dan server resmi enjadi Persatuan Orang Santai (sekarang Perkumpulan Orang Santai).
                </p>
                <br>
                <p class="text-justify">
                    Sekarang, POS aktif di Sosial Media Instagram dan POS membuat Komunitasnya di Facebook
                    berupa Fanpage dan Grup.
                </p>

                <br>
                <br>
            </div>

            <div class="col-md-12">
                <h2 class="swal2-title text-left">Kenapa harus POS?</h2>
            </div>
            <div class="col-md-12">
                <p class="text-justify">
                    Pada awalnya Komunitas ini terbuat dari sebuah postingan M Ikhsan yang mengatakan Senin? Santai....
                    di sinilah para Staff Discord terinspirasi dan terbuat dengan nama Persatuan Orang Santai (dulu)
                    dan mengalami perubahan nama menjadi Perkumpulan Orang Santai (hingga sekarang).
                </p>
            </div>
        </div>
        `
    });
});

$(document).ready(function () {
    const main = this;
    $(main).on('click', '#fb', async function (e) {
        const isActive = $(this).hasClass('active');
        if (isActive) return;

        $(main).find('.active').removeClass('active');
        $(this).addClass('active');

        const getFB = await getData('fb');
        $('#staff-table').html(getFB.join('\n'));
    });

    $(main).on('click', '#dc', async function (e) {
        const isActive = $(this).hasClass('active');
        if (isActive) return;

        $(main).find('.active').removeClass('active');
        $(this).addClass('active');

        const getDC = await getData('dc');
        $('#staff-table').html(getDC.join('\n'));
    });

    $(main).on('click', '#ig', async function (e) {
        const isActive = $(this).hasClass('active');
        if (isActive) return;

        $(main).find('.active').removeClass('active');
        $(this).addClass('active');

        const getIG = await getData('ig');
        $('#staff-table').html(getIG.join('\n'));
    });
});