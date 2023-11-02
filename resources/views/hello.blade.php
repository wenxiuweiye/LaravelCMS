<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hello laravel blade</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div class=" h-screen w-screen flex bg-purple-900 flex-col">
        <div class=" flex justify-center items-center w-full">
            <h1 class=" text-7xl text-cyan-300">{{$framework}}</h1>
            <h1 class=" text-7xl">&</h1>
            <h1 class=" text-7xl text-green-300">{{$util}}</h1>
        </div>
    </div>
</body>
</html>