# change files add/remove bom character

## this project is just test project use carefully

add/remove first "\uFEFF" from file

1. npm i -g change-bomfile
2. move to root folder where you want

3-1. add to single file

- change-bomfile bom single add {filename} --eg change-bomfile bom single add Hello.java

3-2. remove to single file

- change-bomfile bom single remove {filename} --eg change-bomfile bom single remove Hello.java

3-3. add to all inside folder

- change-bomfile bom folder add {foldername} --eg change-bomfile bom folder add myProject

3-4. remove to all inside folder

- change-bomfile bom folder remove {foldername} --eg change-bomfile bom folder remove myProject

4. show currunt folder list

- change-bomfile list
