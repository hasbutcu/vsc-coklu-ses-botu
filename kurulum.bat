@echo off
color 9
echo ecosystem.config.js Dosyasini Doldurmayi Unutmayiniz.
echo Doldurdugunuzu onaylamak icin bir tusa basin!
pause
call ./kurulum/123.bat
cls
color 9
echo Lutfen Bekleyiniz
call ./kurulum/pm2.bat
cls
color 9
echo Kurulum Tamamlandi
echo baslat.bat dosyasini calistirarak botlarinizi baslatabilirsiniz
echo Herhangi Bir Tusa Basarak Pencereyi Kapatabilirsiniz
pause