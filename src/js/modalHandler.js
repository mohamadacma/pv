export function initModalHandler() {
    $('#demoModal').on('show.bs.modal', function (e) {
        $("#demoVideo").attr('src', "https://www.youtube.com/embed/ZFs42j0D8qI");
    });

    $('#demoModal').on('hide.bs.modal', function (e) {
        $("#demoVideo").attr('src', "");
    });
}