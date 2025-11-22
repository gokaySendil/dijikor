import React from "react";
import "./footer.css";
import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
        <img 
          src={logo}
          alt="Dikikor Logo"
          className="footer-logo"
        />
      </div>

      <div className="footer-columns">

        <div className="footer-col">
          <h4>ÜRÜNLER & HİZMETLER</h4>
          <a href="#">Trafik</a>
          <a href="#">Kasko</a>
          <a href="#">Tamamlayıcı Sağlık</a>
          <a href="#">DASK</a>
          <a href="#">Yurt Dışı Seyahat</a>
          <a href="#">Tekne ve yat poliçeleri</a>
          <a href="#">işyeri Sigortası</a>
          <a href="#">Anlaşmalı Sağlık Kuruluşları</a>
        </div>

        <div className="footer-col">
          <h4>KATEGORİLER</h4>
          <a href="#">Trafik Sigortası</a>
          <a href="#">Kasko Sigortası</a>
          <a href="#">Sağlık Sigortası</a>
          <a href="#">Konut Sigortası</a>
          <a href="#">Seyahat Sigortası</a>
        </div>

        <div className="footer-col">
          <h4>HIZLI ERİŞİM</h4>
          <a href="#">Bize Ulaşın</a>
          <a href="#">Yardım ve Destek</a>
          <a href="#">İş Ortakları</a>
          
        </div>

        <div className="footer-col">
          <h4>FAYDALI LİNKLER</h4>
          <a href="#">Yasal Uygulamalar</a>
          <a href="#">Trafik Sigortası Prim Sorgulama</a>
          <a href="#">Sağlık Sigortası Prim Sorgulama</a>
          <a href="#">Yanlış Sigorta Uygulamaları</a>
          <a href="#">Bilgilendirmesi</a>
          <a href="#">Hak Sahiplerince Aranmayan Paralar</a>
        </div>

        

      </div>
      </div>
    </footer>
  );
}
