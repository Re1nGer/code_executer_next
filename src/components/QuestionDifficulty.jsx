const QuestionDifficulty = ({ difficulty }) => {

    const getBackgroundGradient = () => {
        switch(difficulty) {
            case 1:
                return 'linear-gradient(#34ed43,#369536)';
            case 2:
                return 'linear-gradient(#51adef,#008bef)';
            case 3:
                return 'linear-gradient(#ef5151,red)';
            case 4:
                return 'linear-gradient(#383535,#0e0e0e)';
            default:
                return '';
        }
    }

    return <span
        style={{ background: getBackgroundGradient() }}
        className={'rounded-[4px] h-[17px] w-[17px]'}></span>
}

export default QuestionDifficulty;