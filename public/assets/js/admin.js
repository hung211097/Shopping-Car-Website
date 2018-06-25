var reg = /^\d+$/;

$(document).ready(function() {

	if($('input[name="TenHangXe"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-TenHangXe').find('.glyphicon-ok').show();
		$('.form-TenHangXe').find('.glyphicon-remove').hide();
		$('.TenHangXe-null').hide();
	}

	if($('input[name="TenDongXe"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-TenDongXe').find('.glyphicon-ok').show();
		$('.form-TenDongXe').find('.glyphicon-remove').hide();
		$('.TenDongXe-null').hide();
	}

	if($('input[name="TenXe"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-TenXe').find('.glyphicon-ok').show();
		$('.form-TenXe').find('.glyphicon-remove').hide();
		$('.TenXe-null').hide();
	}

	if($('textarea[name="MoTa"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-MoTa').find('.glyphicon-ok').show();
		$('.form-MoTa').find('.glyphicon-remove').hide();
		$('.MoTa-null').hide();
	}

	if($('input[name="XuatXu"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-XuatXu').find('.glyphicon-ok').show();
		$('.form-XuatXu').find('.glyphicon-remove').hide();
		$('.XuatXu-null').hide();
	}

	if($('input[name="NhienLieu"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-NhienLieu').find('.glyphicon-ok').show();
		$('.form-NhienLieu').find('.glyphicon-remove').hide();
		$('.NhienLieu-null').hide();
	}

	if($('input[name="MauSac"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-MauSac').find('.glyphicon-ok').show();
		$('.form-MauSac').find('.glyphicon-remove').hide();
		$('.MauSac-null').hide();
	}

	if($('input[name="HopSo"]').val() != "")
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-HopSo').find('.glyphicon-ok').show();
		$('.form-HopSo').find('.glyphicon-remove').hide();
		$('.HopSo-null').hide();
	}

	if($('input[name="Gia"]').val() != "" && reg.test($('input[name="Gia"]').val()))
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-Gia').find('.glyphicon-ok').show();
		$('.form-Gia').find('.glyphicon-remove').hide();
		$('.Gia-null').hide();
		$('.Gia-format').hide();
	}

	if($('input[name="SoLuongTon"]').val() != "" && reg.test($('input[name="SoLuongTon"]').val()))
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-SoLuongTon').find('.glyphicon-ok').show();
		$('.form-SoLuongTon').find('.glyphicon-remove').hide();
		$('.SoLuongTon-null').hide();
		$('.SoLuongTon-format').hide();
	}

	if($('input[name="SoCua"]').val() != "" && reg.test($('input[name="SoCua"]').val()))
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-SoCua').find('.glyphicon-ok').show();
		$('.form-SoCua').find('.glyphicon-remove').hide();
		$('.SoCua-null').hide();
		$('.SoCua-format').hide();
	}

	if($('input[name="SoCho"]').val() != "" && reg.test($('input[name="SoCho"]').val()))
	{
		$(this).parent().parent().removeClass('has-error');
		$(this).parent().parent().addClass('has-success');
		$('.form-SoCho').find('.glyphicon-ok').show();
		$('.form-SoCho').find('.glyphicon-remove').hide();
		$('.SoCho-null').hide();
		$('.SoCho-format').hide();
	}
});

$('input[name="TenHangXe"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-TenHangXe').find('.glyphicon-ok').hide();
    $('.form-TenHangXe').find('.glyphicon-remove').show();
    $('.TenHangXe-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-TenHangXe').find('.glyphicon-ok').show();
    $('.form-TenHangXe').find('.glyphicon-remove').hide();
    $('.TenHangXe-null').hide();
  }
});

$('input[name="TenDongXe"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-TenDongXe').find('.glyphicon-ok').hide();
    $('.form-TenDongXe').find('.glyphicon-remove').show();
    $('.TenDongXe-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-TenDongXe').find('.glyphicon-ok').show();
    $('.form-TenDongXe').find('.glyphicon-remove').hide();
    $('.TenDongXe-null').hide();
  }
});

$('input[name="TenXe"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-TenXe').find('.glyphicon-ok').hide();
    $('.form-TenXe').find('.glyphicon-remove').show();
    $('.TenXe-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-TenXe').find('.glyphicon-ok').show();
    $('.form-TenXe').find('.glyphicon-remove').hide();
    $('.TenXe-null').hide();
  }
});


$('textarea[name="MoTa"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-MoTa').find('.glyphicon-ok').hide();
    $('.form-MoTa').find('.glyphicon-remove').show();
    $('.MoTa-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-MoTa').find('.glyphicon-ok').show();
    $('.form-MoTa').find('.glyphicon-remove').hide();
    $('.MoTa-null').hide();
  }
});

$('input[name="XuatXu"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-XuatXu').find('.glyphicon-ok').hide();
    $('.form-XuatXu').find('.glyphicon-remove').show();
    $('.XuatXu-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-XuatXu').find('.glyphicon-ok').show();
    $('.form-XuatXu').find('.glyphicon-remove').hide();
    $('.XuatXu-null').hide();
  }
});

$('input[name="NhienLieu"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-NhienLieu').find('.glyphicon-ok').hide();
    $('.form-NhienLieu').find('.glyphicon-remove').show();
    $('.NhienLieu-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-NhienLieu').find('.glyphicon-ok').show();
    $('.form-NhienLieu').find('.glyphicon-remove').hide();
    $('.NhienLieu-null').hide();
  }
});

$('input[name="MauSac"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-MauSac').find('.glyphicon-ok').hide();
    $('.form-MauSac').find('.glyphicon-remove').show();
    $('.MauSac-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-MauSac').find('.glyphicon-ok').show();
    $('.form-MauSac').find('.glyphicon-remove').hide();
    $('.MauSac-null').hide();
  }
});

$('input[name="HopSo"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-HopSo').find('.glyphicon-ok').hide();
    $('.form-HopSo').find('.glyphicon-remove').show();
    $('.HopSo-null').show();
  } else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-HopSo').find('.glyphicon-ok').show();
    $('.form-HopSo').find('.glyphicon-remove').hide();
    $('.HopSo-null').hide();
  }
});


$('input[name="Gia"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-Gia').find('.glyphicon-ok').hide();
    $('.form-Gia').find('.glyphicon-remove').show();
    $('.Gia-null').show();
		$('.Gia-format').hide();
  } else if(parseInt($(this).val()) <= 0 || !reg.test($(this).val())){
		$(this).parent().parent().removeClass('has-success');
		$(this).parent().parent().addClass('has-error');
		$('.form-Gia').find('.glyphicon-ok').hide();
		$('.form-Gia').find('.glyphicon-remove').show();
		$('.Gia-null').hide();
		$('.Gia-format').show();
	} else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-Gia').find('.glyphicon-ok').show();
    $('.form-Gia').find('.glyphicon-remove').hide();
    $('.Gia-null').hide();
		$('.Gia-format').hide();
  }
});

$('input[name="SoLuongTon"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-SoLuongTon').find('.glyphicon-ok').hide();
    $('.form-SoLuongTon').find('.glyphicon-remove').show();
    $('.SoLuongTon-null').show();
		$('.SoLuongTon-format').hide();
  } else if(parseInt($(this).val()) <= 0 || !reg.test($(this).val())){
		$(this).parent().parent().removeClass('has-success');
		$(this).parent().parent().addClass('has-error');
		$('.form-SoLuongTon').find('.glyphicon-ok').hide();
		$('.form-SoLuongTon').find('.glyphicon-remove').show();
		$('.SoLuongTon-null').hide();
		$('.SoLuongTon-format').show();
	} else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-SoLuongTon').find('.glyphicon-ok').show();
    $('.form-SoLuongTon').find('.glyphicon-remove').hide();
    $('.SoLuongTon-null').hide();
		$('.SoLuongTon-format').hide();
  }
});

$('input[name="SoCua"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-SoCua').find('.glyphicon-ok').hide();
    $('.form-SoCua').find('.glyphicon-remove').show();
    $('.SoCua-null').show();
		$('.SoCua-format').hide();
  } else if(parseInt($(this).val()) <= 0 || !reg.test($(this).val())){
		$(this).parent().parent().removeClass('has-success');
		$(this).parent().parent().addClass('has-error');
		$('.form-SoCua').find('.glyphicon-ok').hide();
		$('.form-SoCua').find('.glyphicon-remove').show();
		$('.SoCua-null').hide();
		$('.SoCua-format').show();
	} else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-SoCua').find('.glyphicon-ok').show();
    $('.form-SoCua').find('.glyphicon-remove').hide();
    $('.SoCua-null').hide();
		$('.SoCua-format').hide();
  }
});

$('input[name="SoCho"]').on('blur', function() {
	if($(this).val() == ""){
		$(this).parent().parent().removeClass('has-success');
    $(this).parent().parent().addClass('has-error');
    $('.form-SoCho').find('.glyphicon-ok').hide();
    $('.form-SoCho').find('.glyphicon-remove').show();
    $('.SoCho-null').show();
		$('.SoCho-format').hide();
  } else if(parseInt($(this).val()) <= 0 || !reg.test($(this).val())){
		$(this).parent().parent().removeClass('has-success');
		$(this).parent().parent().addClass('has-error');
		$('.form-SoCho').find('.glyphicon-ok').hide();
		$('.form-SoCho').find('.glyphicon-remove').show();
		$('.SoCho-null').hide();
		$('.SoCho-format').show();
	} else {
    $(this).parent().parent().removeClass('has-error');
    $(this).parent().parent().addClass('has-success');
    $('.form-SoCho').find('.glyphicon-ok').show();
    $('.form-SoCho').find('.glyphicon-remove').hide();
    $('.SoCho-null').hide();
		$('.SoCho-format').hide();
  }
});

// -----------------------------------------------------------------------------
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

$('#tenDong').on('blur', function() {
	if ($('#tenDong').val() == "")
	{
		$('#tenDong').after('<span id="helpBlock" class="help-block">Bạn chưa nhập thông tin trên</span>');
		$('#tenDong').parent().removeClass('form-group');
		$('#tenDong').parent().addClass('form-group has-error');
	}
});

var patch;
$('section[class="wrapper"]').on('change', '#i_file', function(event) {
	patch = URL.createObjectURL(event.target.files[0]);
});

$('#addCar').on('click', function() {
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
											<button type="button" class="button square hvr-rectangle-out" name="Update" data-toggle="modal" data-target="#boxUpdateCar">
											<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Detail" data-toggle="modal" data-target="#boxDetail">
											<i class="fa fa-eye"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>`);
	$('#myModal').modal("toggle");
});



$('#addKindOfCar').on('click', function() {
	var tenDong = $('#tenDong').val();
	$('#info_KindOfCar').append(`<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<div class="item">
								<div class="prod-grid">
									<a href="javascript:;" title="` + tenDong + `" class="thumbnail">
										<img src="` + patch + `" data-lazyload="` + patch + `" alt="` + tenDong + `">
									</a>
									<div class="infoBestSell">
										<h3><a href="javascript:;">` + tenDong + `</a></h3>
									</div>
									<form class="products-view-grid" action="" method="post" data-id="">
										<div class="group">
											<button type="button" class="button square hvr-rectangle-out" name="Delete">
												<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Update" data-toggle="modal" data-target="#boxUpdateKindOfCar">
												<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Detail" data-toggle="modal" data-target="#boxDetail">
											<i class="fa fa-eye"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>`);
	$('#myModal').modal("toggle");
});

$('#addManufacturer').on('click', function() {
	var hangXe = $('#hangXe').val();
	$('#info_manufacturer').append(`<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<div class="item">
								<div class="prod-grid">
									<a href="javascript:;" title="` + hangXe + `" class="thumbnail">
										<img src="` + patch + `" data-lazyload="` + patch + `" alt="` + hangXe + `">
									</a>
									<div class="infoBestSell">
										<h3><a href="javascript:;">` + hangXe + `</a></h3>
									</div>
									<form class="products-view-grid" action="" method="post" data-id="">
										<div class="group">
											<button type="button" class="button square hvr-rectangle-out" name="Delete">
												<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Update">
												<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Detail" data-toggle="modal" data-target="#boxDetail">
											<i class="fa fa-eye"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>`);
	$('#myModal').modal("toggle");
});

$('.rowAdd').on('click', 'button[name="Delete"]', function () {
	$(this).parent().parent().parent().parent().parent().remove();
});

$('.rowAdd').on('click', 'button[name="Update"]', function () {
	$(this).parent().parent().parent().parent().parent().attr('data-name', 'edit');
	$('section[class="wrapper"]').on('click', 'button[name="btnSua"]', function () {
		var dong = $('#dongUpdate').val();
		var ten = $('#tenUpdate').val();
		var gia = $('#giaUpdate').val();
		var xuatXu = $('#xuatXuUpdate').val();
		var moTa = $('#moTa').val();
		var nhienLieu = $('#nhienLieuUpdate').val();
		var hopSo = $('#hopSoUpdate').val();
		var mau = $('#mauUpdate').val();
		var soCua = $('#soCuaUpdate').val();
		var soCho = $('#soChoUpdate').val();
		$('div[data-name="edit"]').html(`
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
												<button type="button" class="button square hvr-rectangle-out" name="Update" data-toggle="modal" data-target="#boxUpdateCar">
												<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
												</button>
												<button type="button" class="button square hvr-rectangle-out" name="Detail" data-toggle="modal" data-target="#boxDetail">
												<i class="fa fa-eye"></i>
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>`);
		$('div[data-name="edit"]').removeAttr('data-name');
		$('#boxUpdateCar').modal("toggle");
	});
});


$('.rowAdd').on('click', 'button[name="Update"]', function () {
	$(this).parent().parent().parent().parent().parent().attr('data-name', 'edit');
	$('section[class="wrapper"]').on('click', 'button[name="btnSuaDongXe"]', function () {
		var tenDong = $('#tenDongUpdate').val();
		$('div[data-name="edit"]').html(`
								<div class="item">
								<div class="prod-grid">
									<a href="javascript:;" title="` + tenDong + `" class="thumbnail">
										<img src="` + patch + `" data-lazyload="` + patch + `" alt="` + tenDong + `">
									</a>
									<div class="infoBestSell">
										<h3><a href="javascript:;">` + tenDong + `</a></h3>
									</div>
									<form class="products-view-grid" action="" method="post" data-id="">
										<div class="group">
											<button type="button" class="button square hvr-rectangle-out" name="Delete">
												<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Update" data-toggle="modal" data-target="#boxUpdateKindOfCar">
												<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Detail" data-toggle="modal" data-target="#boxDetail">
											<i class="fa fa-eye"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>`);
		$('div[data-name="edit"]').removeAttr('data-name');
		$('#boxUpdateKindOfCar').modal("toggle");
	});
});


$('.rowAdd').on('click', 'button[name="Update"]', function () {
	$(this).parent().parent().parent().parent().parent().attr('data-name', 'edit');
	$('section[class="wrapper"]').on('click', 'button[name="btnSuaHangXe"]', function () {
		var hangXe = $('#hangXeUpdate').val();
		$('div[data-name="edit"]').html(`
								<div class="item">
								<div class="prod-grid">
									<a href="javascript:;" title="` + hangXe + `" class="thumbnail">
										<img src="` + patch + `" data-lazyload="` + patch + `" alt="` + hangXe + `">
									</a>
									<div class="infoBestSell">
										<h3><a href="javascript:;">` + hangXe + `</a></h3>
									</div>
									<form class="products-view-grid" action="" method="post" data-id="">
										<div class="group">
											<button type="button" class="button square hvr-rectangle-out" name="Delete">
												<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Update">
												<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
											</button>
											<button type="button" class="button square hvr-rectangle-out" name="Detail" data-toggle="modal" data-target="#boxDetail">
											<i class="fa fa-eye"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>`);
		$('div[data-name="edit"]').removeAttr('data-name');
		$('#boxUpdateManufacturer').modal("toggle");
	});
});

$('#list').on('click', 'button[name="editStatus"]', function() {
	if($(this).closest('td').attr('data-name') == "DaGiao")
	{
		$(this).closest('td').attr('data-name', 'ChuaGiao');
		$(this).closest('tr').removeClass('success').addClass('danger');
		$(this).parent().html(`Chưa giao
								<button type="button" class="button square hvr-rectangle-out" name="editStatus">
									<i class="fa fa-edit"></i>
								</button>`);
	}
	else
	{
		$(this).closest('td').attr('data-name', 'DaGiao');
		$(this).closest('tr').removeClass('danger').addClass('success');
		$(this).parent().html(`Đã giao
								<button type="button" class="button square hvr-rectangle-out" name="editStatus">
									<i class="fa fa-edit"></i>
								</button>`);
	}
});
