# Website xem phim

**GitHub:** https://github.com/ductrong1507/funix_movie_website

**Deloy:** https://funix-movie-website.web.app/

## Tổng quan dự án

Trang Web này sẽ bao gồm 2 chức năng xem thông tin cũng như tìm kiếm phim theo từ khóa. Dữ liệu về các bộ phim được lấy từ 1 API có tên là The Movie Database API

> https://developer.themoviedb.org
>
> https://developer.themoviedb.org/reference/movie-videos

#### Trang chủ (_BrowsePage_):

- **Đường dẫn:** "/".
- **Feature:** Hiển thị các bộ phim hot trend theo danh mục, xem thông tin chi tiết phim: _tên, đạo diễn, năm phát hành, trailer..._
- **Thành phần:**
  - Banner
  - Phim Xu hướng
  - Phim top rating
  - Phim hành động
  - Phim hài
  - Phim kinh dị
  - Phim lãng mạn
  - Phim tài liệu
    ![Trang chủ](./public/home_page_img.png)

#### Trang tìm kiếm (_SearchPage_):

- **Đường dẫn:** "/search".
- **Feature:** Tính năng tìm kiếm phim theo tên, xem thông tin chi tiết phim đã tìm: _tên, đạo diễn, năm phát hành, trailer..._
- **Additional Feature:** tìm kiếm nâng cao theo: thể loại, ngôn ngữ, năm phát hành... **_(Coming soon...)_**
- **Thành phần:**
  - Form tìm kiếm
  - Danh sách kết quả
    ![Trang chủ](https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FRJS101x_ASM02_07.png?alt=media&token=4063d0f3-778c-4815-b2f8-c7d6e7db2cf7)
