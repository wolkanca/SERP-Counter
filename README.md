[![SERP Counter Chrome Uzantı sonucu](https://i0.wp.com/wolkanca.com/wp-content/uploads/2023/10/serp-counter-chrome-uzanti-gorunum.webp)](https://wolkanca.com/chrome-serp-counter-uzantisi/ "SERP Counter Chrome Uzantı sonucu")

SERP Counter Chrome Uzantı sonucu

Bu tarayıcı uzantısı aslında [Firefox](https://wolkanca.com/firefox-eklentisi-nasil-yapilir/) için uzun yıllardır var ve kullanılıyor gayet de iyi, Chrome versiyonunu da bir arkadaş yapmış ancak güncel değildi. Ben arkadaşa kendi yaptığım [kodları gönderdim](https://chromewebstore.google.com/detail/dgpekiojagcbjhgfpmmngnkchekcfifn/support?filterBy=suggestions) eklentisini güncelledi ancak yine de beğenmedim tam yapamamış benim kodları kopyalamış sadece.

Bu yüzden ben eklentiyi [Chrome Web Mağazası](https://chromewebstore.google.com/detail/wolkanca/obfdndpeccmhenckcbjloheheaihfmmh)nda henüz yayınlamadım(belki yayınlarım) ancak [kendi eklentimi](https://wolkanca.com/chrome-eklentisi-nasil-yapilir/) geliştirici modunu açarak kullanabiliyorum bu yüzden bunu da kendim kullanabiliyorum, sizinle de paylaşmak istedim zaten çok basit bir uygulama.

**Chrome extensions developer mode**

[![Chrome uzantılar developer mode açmak](https://i0.wp.com/wolkanca.com/wp-content/uploads/2023/10/serp-counter-chrome-uzanti.webp)](https://wolkanca.com/chrome-serp-counter-uzantisi/#chrome-extensions-developer-mode)

Chrome uzantılar developer mode açmak

Developer modu [bu görselde](https://wolkanca.com/wp-content/uploads/2023/10/serp-counter-chrome-uzanti.webp) görünen buton ile açabilir ve “_paketlenmemiş öğe yükle_” diyerek buradan indirdiğiniz klasörü gösterip eklentiyi kurabilirsiniz. Eklenti klasörünü bilgisayarınızda hiç silmeyeceğiniz bir yere koyun çünkü klasör silinirse uzantı da silinir çalışmaz. Uzantı sadece [Google Chrome](https://wolkanca.com/google-chrome-yan-panel-aramayi-kapatmak/) değil Chrome altyapısı ile çalışan tüm tarayıcılarda çalışır yani [Microsoft Edge](https://wolkanca.com/yeni-microsoft-edge/), [Yandex](https://wolkanca.com/yandex-logosunu-degistirdi/), [Opera](https://wolkanca.com/yeni-opera-one-tarayici/), [Brave](https://wolkanca.com/chrome-tarayicida-sifreleri-gormek/) vs.

Buradaki sıkıntı şu ki Google gibi yoğun veri sunan büyük siteler(Instagram, Twitter, Facebook vb.) önyüzdeki elemanlara sabit sınıflar ve ID kullanmaktan dolayısıyla referans alıp bir şeyler yazması zorlaşıyor(zaten amaçları da bu) yoksa programlaması da gerçekten çok basit bit uzantı, yazması basit olsa da bizim gibi çalışanlar için yani Google’da sıralama numaralarını görme ihtiyacı duyanlar için oldukça faydalı ve kullanışlı bir uzantı.

Uzantının normalde açma kapama butonu ile ayarı vardı ancak ben gerek duymadım çünkü sadece tek bir iş yapıyor ve kapatmak isteyen uzantıyı devre dışı bırakır yani bana çok gereksiz geldi. Uzantıyı geliştirmeyi düşünmüyorum ancak Google’a en sonra gelen sonsuz kaydırma gibi bir büyük güncelleme gelir ve uzantı doğru şekilde çalışmazsa günceller paylaşırım.

### Uzantıyı şuradan indirebilirsiniz: [https://github.com/wolkanca/SERP-Counter](https://github.com/wolkanca/SERP-Counter)

Ek olarak **[User JavaScript and CSS](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)** isimli Chrome uzantısını kullanarak aşağıdaki kod örneği gibi bir kodla arama sonuçlarında istediğiniz sitenin daha görünür olmasını sağlayabilirsiniz, örnek görmek için olarak bu sayfadaki [ana görsele bakabilirsiniz](https://i0.wp.com/wolkanca.com/wp-content/uploads/2023/10/serp-counter-chrome-uzanti-gorunum.webp), yapmanız gereken sadece örnek koddaki bu sitenin adresini kendi istediğiniz sitelerle değiştirmek.

    /* https://www.google.com/search?q= */
    :root,html{
    	color-scheme:dark;
    }
    :root{
        --si: rgb(32 33 36);
        --be: rgb(189 193 198);
    }       
    @media (prefers-color-scheme: light) {
        :root{
            --siyah: var(--be);
            --beyaz: var(--si);
        }
    }
    @media (prefers-color-scheme: dark) {
        :root{
            --siyah: var(--si);
            --beyaz: var(--be);
        }
    }
    
    html span[jscontroller]>a[href*="wolkanca.com"]:after {
        content: "";
        display: block;
        background-color: currentColor;
        color: var(--beyaz) !important;
        height: 0.3rem;
    }
    
    html span[jscontroller]>a[href*="wolkanca.com"]>h3 {
        background: var(--beyaz);
        color: var(--siyah);
        width: 100%;
        padding: .5rem;
    }

SEO işi ile ilgili olanlar için bu uzantıyı kurmak ve kullanmak çok kolay olacaktır, tüm SEO’ların işine yarayacağını umuyorum, kolay gelsin.
