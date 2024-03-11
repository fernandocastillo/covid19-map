<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link type="image/png" sizes="16x16" rel="icon" href="{{ asset('/img/pwa72.png')}}">
    <title>COVID 19</title>
    <!-- PWA  -->
    <meta name="theme-color" content="#E28644"/>
    <link rel="apple-touch-icon" href="{{ asset('/img/pwa72.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">

    @vite(['resources/css/app.css', 'resources/ts/app.tsx'])
    @inertiaHead
  </head>
  <body>
    @inertia

    <script src="{{ asset('/sw.js') }}"></script>
    <script>
    if ("serviceWorker" in navigator) {
        // Register a service worker hosted at the root of the
        // site using the default scope.
        navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
            console.log("Service worker registration succeeded:", registration);
        },
        (error) => {
            console.error(`Service worker registration failed: ${error}`);
        },
        );
    } else {
        console.error("Service workers are not supported.");
    }
    </script>
  </body>
</html>