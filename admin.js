var cars = [];

cars.push({duongDan: "./image/all/Aston Martin DB11.jpg", ten: "Aston Martin DB11", gia: "4.829.000.000đ"});

var patch;
$('#i_file').on('change', function(event) {
	patch = URL.createObjectURL(event.target.files[0]);
});


$('#dong').on('blur', function() {
	if ($('#dong').val() == "")
	{
		$('#dong').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#dong').parent().removeClass('form-group');
		$('#dong').parent().addClass('form-group has-error');
	}
});

$('#ten').on('blur', function() {
	if ($('#ten').val() == "")
	{
		$('#ten').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#ten').parent().removeClass('form-group');
		$('#ten').parent().addClass('form-group has-error');
	}
});

$('#gia').on('blur', function() {
	if ($('#gia').val() == "")
	{
		$('#gia').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#gia').parent().removeClass('form-group');
		$('#gia').parent().addClass('form-group has-error');
	}
});

$('#xuatXu').on('blur', function() {
	if ($('#xuatXu').val() == "")
	{
		$('#xuatXu').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#xuatXu').parent().removeClass('form-group');
		$('#xuatXu').parent().addClass('form-group has-error');
	}
});

$('#moTa').on('blur', function() {
	if ($('#moTa').val() == "")
	{
		$('#moTa').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#moTa').parent().removeClass('form-group');
		$('#moTa').parent().addClass('form-group has-error');
	}
});

$('#nhienLieu').on('blur', function() {
	if ($('#nhienLieu').val() == "")
	{
		$('#nhienLieu').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#nhienLieu').parent().removeClass('form-group');
		$('#nhienLieu').parent().addClass('form-group has-error');
	}
});

$('#hopSo').on('blur', function() {
	if ($('#hopSo').val() == "")
	{
		$('#hopSo').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#hopSo').parent().removeClass('form-group');
		$('#hopSo').parent().addClass('form-group has-error');
	}
});

$('#mau').on('blur', function() {
	if ($('#mau').val() == "")
	{
		$('#mau').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#mau').parent().removeClass('form-group');
		$('#mau').parent().addClass('form-group has-error');
	}
});

$('#soCua').on('blur', function() {
	if ($('#soCua').val() == "")
	{
		$('#soCua').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#soCua').parent().removeClass('form-group');
		$('#soCua').parent().addClass('form-group has-error');
	}
});

$('#soCho').on('blur', function() {
	if ($('#soCho').val() == "")
	{
		$('#soCho').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#soCho').parent().removeClass('form-group');
		$('#soCho').parent().addClass('form-group has-error');
	}
});


$('#add').on('click', function() {
	var dong = $('#dong').val();
	var ten = $('#ten').val();
	var gia = $('#gia').val();
	var xuatXu = $('#xuatXu').val();
	var moTa = $('#moTa').val();
	var nhienLieu = $('#nhienLieu').val();
	var hopSo = $('#hopSo').val();
	var mau = $('#mau').val();
	var soCua = $('#soCua').val();
	var soCho = $('#soCho').val();
	$('#infor_car').append(`<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<div class="item">
								<div class="prod-grid">
									<a href="javascript:;" title="` + ten + `" class="thumbnail">
										<img src="` + patch + `" data-lazyload="` + patch + `" alt="` + ten + `">
									</a>
									<div class="infoBestSell">
										<h3><a href="javascript:;">` + ten + `</a></h3>
										<div class="clearfix">
											<div class="special-price">
												<span class="price product-price">`
													+ gia + `₫
												</span>
											</div>
										</div>
									</div>
									<form class="products-view-grid" action="" method="post" data-id="">
										<div class="group">
											<button type="button" class="button square hvr-rectangle-out" name="Delete">
												<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Update">
												<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Detail">
												<i class="fa fa-eye"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>`);
	$('#myModal').modal("toggle");
});

