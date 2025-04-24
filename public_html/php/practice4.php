<html>

<head>
    <h1>EECS 348: Lab 4</h1>
    <h2>Practice 4 - Leo Cabezas</h2>
</head>

<style>
    table, th, td {
      border: 1px solid black;
    }
</style>

<body>
    <link href="../css/practice4_styles.css" rel="stylesheet" type="text/css" />

    <form method="post">
        Table size: <input type="text" name="size"><br>

        <br>

        <button type="submit"> <div class="button_text"> >Generate multiplication table </div></button>
    </form>

    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $size = $_POST['size'];
        
        echo "<table>";   
        echo "<tr><th>Index</th>";
        
        for ($i = 1; $i <= $size; $i++){
            echo "<th>$i</th>";
        }
        
        echo "</tr>";
        
        for ($i = 1; $i <= $size; $i++){
            echo "<tr><th>$i</th>";

            for ($j = 1; $j <= $size; $j++){
                echo "<td>" . ($i * $j) . "</td>";
            }
            
            echo "</tr>";
        }
        echo "</table>";
    }

    ?>

</body>

</html>