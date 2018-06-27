var express = require('express'),
    SHA256 = require('crypto-js/sha256'),
    moment = require('moment');
var restrict = require('../middle-wares/restrict');
var router = express.Router();

var userinfoRepo = require('../repos/userinfoRepo');

router.get('/', restrict, (req, res) => {    
    var items = [];
    var username = req.session.user.Username;
    
    var repo1 = userinfoRepo.selectHoaDon(username);
    var repo2 = userinfoRepo.countHoaDon(username);
    
    Promise.all([repo1, repo2]).then(([rows, count])=> {
        var total = count[0].total;
        
        for (var i = 0; i < total; i++)
        {
            var khachhang = {
                index: i + 1,
                KhachHang: username,
                NgayDat: moment(rows[i].NgayDat).format('YYYY-MM-DD HH:mm:ss'),
                SoLuongXe: rows[0].SoLuongXe,
                DiaChi: rows[i].DiaChi,
                SDT: rows[i].SDT,
                GhiChu: rows[i].GhiChu,
                TongTien: rows[i].TongTien,
                TinhTrang: rows[i].TinhTrang
            }
            items.push(khachhang);
        }
        
        var vm = {
            items: items,
            isDetail: false,
            isBack: false
        }

        res.render('UserInfo/index', vm);
    });
    
});

router.post('/EditName', restrict, (req, res) => {
    var user = req.session.user;
    
    user.Name = req.body.Name;
    
    userinfoRepo.updateName(user);
    res.redirect('/UserInfo/');
});

router.post('/', restrict, (req, res) => {
    var user = req.session.user;
    var vm = {
                showChange: true,
                isChange: true,
                errorMsg: 'Change password failed'
            };
            
    var pass = SHA256(req.body.NewPass).toString();
    
    if (user.Password === SHA256(req.body.OldPass).toString())
    {
        user.Password = pass;

        userinfoRepo.updatePass(user);
    }
    else
    {
        vm.isChange = false;
    }
    res.render('UserInfo/index',vm);
});

router.post('/EditEmail', restrict, (req, res) => {
    var user = req.session.user;
    
    user.Email = req.body.NewEmail;
    
    userinfoRepo.updateEmail(user);
    res.redirect('/UserInfo/');
});

router.get('/detail/:NgayDat', (req, res) => {
    var ngay = req.params.NgayDat;
    var username = req.session.user.Username;
    var items = [];
    var khachhang = {
        KhachHang: username,
        NgayDat: ngay
    };
    
    var repo1 = userinfoRepo.selectDetail(khachhang);
    var repo2 = userinfoRepo.countDetail(khachhang);
    
    Promise.all([repo1, repo2]).then(([rows, count])=> {
        var total = count[0].total;
        
        for (var i = 0; i < total; i++)
        {
            var details = {
                    index: i + 1,
                    TenXe: rows[i].TenXe,
                    SoLuong: rows[i].SoLuong
                }
            items.push(details);
        }
        
        var vm = {
            isDetail: true,
            details: items
        }

        res.render('UserInfo/index', vm);
    });
});

router.get('/History', restrict, (req, res) => {    
    var items = [];
    var username = req.session.user.Username;
    
    var repo1 = userinfoRepo.selectHoaDon(username);
    var repo2 = userinfoRepo.countHoaDon(username);
    
    Promise.all([repo1, repo2]).then(([rows, count])=> {
        var total = count[0].total;
        
        for (var i = 0; i < total; i++)
        {
            var khachhang = {
                index: i + 1,
                KhachHang: username,
                NgayDat: moment(rows[i].NgayDat).format('YYYY-MM-DD HH:mm:ss'),
                SoLuongXe: rows[0].SoLuongXe,
                DiaChi: rows[i].DiaChi,
                SDT: rows[i].SDT,
                GhiChu: rows[i].GhiChu,
                TongTien: rows[i].TongTien,
                TinhTrang: rows[i].TinhTrang
            }
            items.push(khachhang);
        }
        
        var vm = {
            items: items,
            isDetail: false,
            isBack: true
        }

        res.render('UserInfo/index', vm);
    });
    
});

module.exports = router;