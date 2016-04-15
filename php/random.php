<?php
include 'playlist.php';
include 'api.php';

function rand_music() {
    global $player_list;
    $sum = count($player_list);
    $id = $player_list[rand(0, $sum - 1)];
    return $id;
}

function get_music_id() {
    $played = isset($_COOKIE["played"]) ? json_decode($_COOKIE["played"]) : null;
    $id = rand_music();
    if ($played != null) {
        global $player_list;
        $sum = count($player_list);
        if ($sum >= 2) {
            $sum = $sum * 0.5;
        } else {
            $sum -= 1;
        }
        while (in_array($id, $played)) {
            $id = rand_music();
        }
        if (count($played) >= $sum) {
            array_shift($played);
        }
    }
    $played[] = $id;
    setcookie("played", json_encode($played), time() + 3600);
    return $id;
}

foreach ($playlist_list as $key) {
    $json = get_playlist_info($key);
    $arr = json_decode($json, true);
    foreach ($arr["result"]["tracks"] as $key2) {
        $id = $key2["id"];
        if (!in_array($id, $player_list)) {
            $player_list[] = $id;
        }
    }
}

$id = get_music_id();
$music_info = json_decode(get_music_info($id), true);
#echo json_encode($music_info);
$play_info["cover"] = $music_info["songs"][0]["album"]["picUrl"];
$play_info["mp3"] = $music_info["songs"][0]["mp3Url"];
$play_info["mp3"] = str_replace("http://m", "http://p", $play_info["mp3"]);
$play_info["title"] = $music_info["songs"][0]["name"];
$play_info["artist"] = $music_info["songs"][0]["artists"][0]["name"];
$play_info["album"] = $music_info["songs"][0]["album"]["name"];
echo json_encode($play_info);
