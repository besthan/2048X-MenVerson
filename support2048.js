/**
 * Created by zihanWang on 16-6-26.
 */
function getPosTop( i , j ){
    return 20 + i*120;
}

function getPosLeft( i , j ){
    return 20 + j*120;
}

function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return "#FFFFCC";break;
        case 4:return "#CCCCFF";break;
        case 8:return "#CCCCCC";break;
        case 16:return "#99CCFF";break;
        case 32:return "#003366";break;
        case 64:return "#336699";break;
        case 128:return "#006699";break;
        case 256:return "#666666";break;
        case 512:return "#99CCCC";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#333333";break;
        case 4096:return "#3399CC";break;
        case 8192:return "#000";break;
    }

    return "black";
}

function getNumberColor( number ){
    if( number <= 4 )
        return "#776e65";

    return "white";
}

function getNumberText( number ){
    switch( number ){
        case 2:return "罗刹女";break;
        case 4:return "幻影猫";break;
        case 8:return "夜行者";break;
        case 16:return "野兽";break;
        case 32:return "剑齿虎";break;
        case 64:return "暴风女";break;
        case 128:return "白皇后";break;
        case 256:return "万磁王";break;
        case 512:return "冰人";break;
        case 1024:return "X教授";break;
        case 2048:return "凤凰女";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }

    return "black";
}

function nospace( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}

function canMoveLeft( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 1; j < 4 ; j ++ )
            if( board[i][j] != 0 )
				//左边格子为空或与左边格子中数字相等
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                    return true;

    return false;
}

function canMoveRight( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}

function canMoveUp( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}

function canMoveDown( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}

function noBlockHorizontal( row , col1 , col2 , board ){
    for( var i = col1 + 1 ; i < col2 ; i ++ )
        if( board[row][i] != 0 )
            return false;
    return true;
}

function noBlockVertical( col , row1 , row2 , board ){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( board[i][col] != 0 )
            return false;
    return true;
}

function nomove( board ){
    if( canMoveLeft( board ) ||
        canMoveRight( board ) ||
        canMoveUp( board ) ||
        canMoveDown( board ) )
        return false;

    return true;
}

