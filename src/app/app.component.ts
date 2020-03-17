import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  sites: Array<any> = [
    {
      id: 1,
      nameSites: "Quảng Nam",
      imgSites: "https://tinbds.com/images/place/2/l0.jpg",
      s: "1116 km2",
      ls: "Đang cập nhập",
      name: "Hoàng Diệu",
      img:
        "https://upload.wikimedia.org/wikipedia/vi/1/13/NhathoNguyenQuynh.JPG",
      ns: 1677,
      nm: 1748
    },
    {
      id: 2,
      nameSites: "Hà Nội",
      imgSites:
        "https://vtv1.mediacdn.vn/thumb_w/650/Uploaded/lanchi/2013_09_19/5.8_ava.jpg",
      s: "3329 km2",
      ls: "Đang cập nhập",
      name: "Lý Thái Tôt",
      img: "https://ashui.com/mag/images/stories/200902/lythaito.jpg",
      ns: 974,
      nm: 1028
    },
    {
      id: 2,
      nameSites: "Hà Nội",
      imgSites:
        "https://vtv1.mediacdn.vn/thumb_w/650/Uploaded/lanchi/2013_09_19/5.8_ava.jpg",
      s: "3329 km2",
      ls: "Đang cập nhập",
      name: "Lý Thái Tôt",
      img: "https://ashui.com/mag/images/stories/200902/lythaito.jpg",
      ns: 974,
      nm: 1028
    }
  ];

  addSites = {
    id: null,
    nameSites: null,
    imgSites: null,
    s: null,
    ls: null,
    name: null,
    img: null,
    ns: null,
    nm: null
  };

  addNewSites() {
    if (this.addSites.id == null) {
      let maxId = 0;
      this.sites.forEach(function(val, ind) {
        if (val.id >= maxId) {
          maxId = val.id;
        }
      });
      this.addSites.id = ++maxId;
      this.addSites.ns = Number(this.addSites.ns);
      this.addSites.nm = Number(this.addSites.nm);
      this.sites.push(this.addSites);
    }
    this.addSites = {
      id: null,
      nameSites: null,
      imgSites: null,
      s: null,
      ls: null,
      name: null,
      img: null,
      ns: null,
      nm: null
    };
  }

  removeSites(sites){
    this.sites = this.sites.filter(function(val){
      return val.id != sites.id;
    })
  }

  edit(sites){
    this.addSites=sites;
  }
}
