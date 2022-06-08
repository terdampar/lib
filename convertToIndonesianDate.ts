export default function convertDateFormat(date: Date) {
    date = new Date(date);
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Juni', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']
    const tanggal = date.getDate() + ' ' + bulan[date.getMonth()] + ' ' + date.getFullYear()
    const waktu = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + '.' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())

    return String(tanggal + ' ' + waktu)
}
