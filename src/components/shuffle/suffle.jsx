import styles from './shuffle.module.scss'
import {useState} from "react";

const Shuffle = ({data}) => {
  const [feelGood, setFeelGood] = useState('')

  const onClick = () => {
    const randomElement = data[Math.floor(Math.random() * data.length)].feelgood
    setFeelGood(randomElement)
    console.log("coucou ça clique", randomElement)
  }

  return (
    <div className={styles.component}>
      <div className={styles.quote}>"{feelGood}"</div>
      <svg className={styles.component__illustration} width="1073" height="678" viewBox="0 0 1073 678" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M715.121 7.514C712.376 7.514 710.837 9.485 710.837 12.383C710.837 15.506 712.601 17.18 715.121 17.18C717.092 17.18 718.604 16.001 718.847 14.129H717.398C717.236 15.065 716.426 15.911 715.148 15.911C713.366 15.911 712.43 14.516 712.43 12.365C712.43 9.989 713.537 8.855 715.13 8.855C716.408 8.855 717.218 9.656 717.38 10.637H718.856C718.604 8.738 717.119 7.514 715.121 7.514ZM723.394 17.117C723.628 17.117 723.952 17.063 724.231 16.973V15.893L723.727 15.884C723.07 15.839 722.683 15.389 722.683 14.444V3.626H721.045V14.606C721.045 15.911 721.387 17.117 723.394 17.117ZM728.107 3.995H726.406V5.723H728.107V3.995ZM728.062 7.694H726.451V17H728.062V7.694ZM738.828 19.898V7.694H737.163L737.145 9.314C736.722 8.549 735.795 7.514 734.085 7.514C731.655 7.514 730.314 9.26 730.314 12.221C730.314 15.677 731.979 17.18 734.22 17.18C735.885 17.18 736.758 16.109 737.145 15.317V19.898H738.828ZM734.535 15.884C732.834 15.884 731.925 14.525 731.925 12.275C731.925 9.944 733.005 8.81 734.535 8.81C736.263 8.81 737.163 10.223 737.163 12.275C737.163 14.282 736.263 15.884 734.535 15.884ZM744.996 17.18C746.31 17.189 747.444 16.613 747.786 15.218L747.957 17H749.28V7.694H747.624V13.751C747.624 15.164 746.715 15.884 745.347 15.884C743.826 15.884 743.088 15.056 743.088 13.841V7.694H741.423V14.012C741.423 16.109 743.061 17.162 744.996 17.18ZM753.242 12.734H759.911V12.122C759.911 9.296 758.453 7.514 755.834 7.514C753.125 7.514 751.559 9.503 751.559 12.437C751.559 15.407 753.35 17.18 755.951 17.18C757.76 17.18 759.506 16.181 759.848 14.282H758.282C758.048 15.335 757.112 15.893 755.924 15.893C754.115 15.893 753.242 14.498 753.242 12.734ZM753.251 11.609C753.242 10.223 754.07 8.774 755.825 8.774C757.508 8.774 758.309 10.007 758.309 11.609H753.251ZM769.815 17.18C772.083 17.18 773.397 16.127 773.397 14.417C773.397 13.499 772.929 12.365 771.219 11.915L769.347 11.447C768.321 11.195 767.781 10.862 767.781 10.196C767.781 9.206 768.6 8.738 769.788 8.738C770.94 8.738 771.624 9.296 771.75 10.187H773.226C773.163 8.441 771.822 7.514 769.806 7.514C767.448 7.514 766.251 8.666 766.26 10.295C766.269 11.681 767.232 12.392 768.735 12.752L770.661 13.229C771.507 13.427 771.903 13.823 771.903 14.507C771.903 15.479 771.066 15.938 769.806 15.938C768.627 15.938 767.691 15.38 767.457 14.291H765.945C766.215 16.298 767.871 17.18 769.815 17.18ZM779.01 17.18C780.324 17.189 781.458 16.613 781.8 15.218L781.971 17H783.294V7.694H781.638V13.751C781.638 15.164 780.729 15.884 779.361 15.884C777.84 15.884 777.102 15.056 777.102 13.841V7.694H775.437V14.012C775.437 16.109 777.075 17.162 779.01 17.18ZM786.154 17H787.81V11.213C787.81 9.665 789.016 9.035 790.501 9.134C790.69 9.134 791.023 9.161 791.203 9.242V7.631C791.05 7.55 790.762 7.514 790.492 7.514C789.313 7.514 788.206 8.144 787.738 9.485V7.694H786.154V17ZM800.983 17.18C802.297 17.189 803.431 16.613 803.773 15.218L803.944 17H805.267V7.694H803.611V13.751C803.611 15.164 802.702 15.884 801.334 15.884C799.813 15.884 799.075 15.056 799.075 13.841V7.694H797.41V14.012C797.41 16.109 799.048 17.162 800.983 17.18ZM808.127 17H809.783V10.781C809.783 9.53 810.935 8.936 812.195 8.936C813.41 8.936 814.247 9.629 814.247 11.078V17H815.912V10.916C815.912 8.576 814.418 7.559 812.654 7.559C811.16 7.559 810.197 8.27 809.738 9.044V7.694H808.127V17ZM826.057 17.18C828.235 17.18 828.964 15.821 829.198 15.092L829.378 17H830.656V3.626H828.973V9.17C828.676 8.567 827.704 7.514 825.922 7.514C823.402 7.514 822.124 9.413 822.124 12.311C822.124 15.497 823.636 17.18 826.057 17.18ZM826.354 15.902C824.68 15.902 823.798 14.561 823.798 12.23C823.798 9.845 824.851 8.81 826.381 8.81C828.235 8.81 828.955 10.052 828.973 12.23C828.973 14.831 828.235 15.902 826.354 15.902ZM834.628 12.734H841.297V12.122C841.297 9.296 839.839 7.514 837.22 7.514C834.511 7.514 832.945 9.503 832.945 12.437C832.945 15.407 834.736 17.18 837.337 17.18C839.146 17.18 840.892 16.181 841.234 14.282H839.668C839.434 15.335 838.498 15.893 837.31 15.893C835.501 15.893 834.628 14.498 834.628 12.734ZM834.637 11.609C834.628 10.223 835.456 8.774 837.211 8.774C838.894 8.774 839.695 10.007 839.695 11.609H834.637ZM846.877 17.18C849.145 17.18 850.459 16.127 850.459 14.417C850.459 13.499 849.991 12.365 848.281 11.915L846.409 11.447C845.383 11.195 844.843 10.862 844.843 10.196C844.843 9.206 845.662 8.738 846.85 8.738C848.002 8.738 848.686 9.296 848.812 10.187H850.288C850.225 8.441 848.884 7.514 846.868 7.514C844.51 7.514 843.313 8.666 843.322 10.295C843.331 11.681 844.294 12.392 845.797 12.752L847.723 13.229C848.569 13.427 848.965 13.823 848.965 14.507C848.965 15.479 848.128 15.938 846.868 15.938C845.689 15.938 844.753 15.38 844.519 14.291H843.007C843.277 16.298 844.933 17.18 846.877 17.18ZM861.558 17.18C864.177 17.18 865.491 15.245 865.491 12.311C865.491 9.152 864.006 7.514 861.684 7.514C859.911 7.514 858.939 8.567 858.633 9.17V3.626H856.959V17H858.228L858.408 15.092C858.642 15.821 859.38 17.18 861.558 17.18ZM861.261 15.902C859.38 15.902 858.633 14.831 858.633 12.23C858.66 10.052 859.38 8.81 861.225 8.81C862.917 8.81 863.817 10.061 863.817 12.23C863.817 14.786 862.764 15.902 861.261 15.902ZM870.048 17.117C870.282 17.117 870.606 17.063 870.885 16.973V15.893L870.381 15.884C869.724 15.839 869.337 15.389 869.337 14.444V3.626H867.699V14.606C867.699 15.911 868.041 17.117 870.048 17.117ZM876.417 17.18C879.189 17.18 880.656 15.227 880.656 12.383C880.656 9.251 878.991 7.514 876.426 7.514C873.672 7.514 872.151 9.467 872.151 12.383C872.151 15.488 873.834 17.18 876.417 17.18ZM876.426 15.866C874.563 15.866 873.807 14.309 873.807 12.347C873.807 10.133 874.734 8.819 876.426 8.819C878.253 8.819 879.009 10.358 879.009 12.347C879.009 14.534 878.091 15.866 876.426 15.866ZM887.468 17.18C890.087 17.18 891.401 15.245 891.401 12.311C891.401 9.152 889.916 7.514 887.594 7.514C885.821 7.514 884.849 8.567 884.543 9.17V3.626H882.869V17H884.138L884.318 15.092C884.552 15.821 885.29 17.18 887.468 17.18ZM887.171 15.902C885.29 15.902 884.543 14.831 884.543 12.23C884.57 10.052 885.29 8.81 887.135 8.81C888.827 8.81 889.727 10.061 889.727 12.23C889.727 14.786 888.674 15.902 887.171 15.902ZM896.887 17.18C899.155 17.18 900.469 16.127 900.469 14.417C900.469 13.499 900.001 12.365 898.291 11.915L896.419 11.447C895.393 11.195 894.853 10.862 894.853 10.196C894.853 9.206 895.672 8.738 896.86 8.738C898.012 8.738 898.696 9.296 898.822 10.187H900.298C900.235 8.441 898.894 7.514 896.878 7.514C894.52 7.514 893.323 8.666 893.332 10.295C893.341 11.681 894.304 12.392 895.807 12.752L897.733 13.229C898.579 13.427 898.975 13.823 898.975 14.507C898.975 15.479 898.138 15.938 896.878 15.938C895.699 15.938 894.763 15.38 894.529 14.291H893.017C893.287 16.298 894.943 17.18 896.887 17.18ZM711.377 40.898H713.051V36.317C713.438 37.109 714.311 38.18 715.976 38.18C718.424 38.18 719.882 36.416 719.882 33.221C719.882 30.017 718.334 28.514 716.111 28.514C714.401 28.514 713.474 29.549 713.051 30.314L713.033 28.694H711.377V40.898ZM715.661 36.884C713.933 36.884 713.033 35.282 713.033 33.275C713.033 31.223 713.933 29.81 715.661 29.81C717.362 29.81 718.271 31.16 718.271 33.275C718.271 35.75 717.191 36.884 715.661 36.884ZM725.826 38.18C728.598 38.18 730.065 36.227 730.065 33.383C730.065 30.251 728.4 28.514 725.835 28.514C723.081 28.514 721.56 30.467 721.56 33.383C721.56 36.488 723.243 38.18 725.826 38.18ZM725.835 36.866C723.972 36.866 723.216 35.309 723.216 33.347C723.216 31.133 724.143 29.819 725.835 29.819C727.662 29.819 728.418 31.358 728.418 33.347C728.418 35.534 727.5 36.866 725.835 36.866ZM735.662 38.18C736.976 38.189 738.11 37.613 738.452 36.218L738.623 38H739.946V28.694H738.29V34.751C738.29 36.164 737.381 36.884 736.013 36.884C734.492 36.884 733.754 36.056 733.754 34.841V28.694H732.089V35.012C732.089 37.109 733.727 38.162 735.662 38.18ZM742.807 38H744.463V32.213C744.463 30.665 745.669 30.035 747.154 30.134C747.343 30.134 747.676 30.161 747.856 30.242V28.631C747.703 28.55 747.415 28.514 747.145 28.514C745.966 28.514 744.859 29.144 744.391 30.485V28.694H742.807V38ZM757.379 38.18C759.557 38.18 760.286 36.821 760.52 36.092L760.7 38H761.978V24.626H760.295V30.17C759.998 29.567 759.026 28.514 757.244 28.514C754.724 28.514 753.446 30.413 753.446 33.311C753.446 36.497 754.958 38.18 757.379 38.18ZM757.676 36.902C756.002 36.902 755.12 35.561 755.12 33.23C755.12 30.845 756.173 29.81 757.703 29.81C759.557 29.81 760.277 31.052 760.295 33.23C760.295 35.831 759.557 36.902 757.676 36.902ZM769.731 24.986L767.877 27.605H769.164L771.621 24.986H769.731ZM765.951 33.734H772.62V33.122C772.62 30.296 771.162 28.514 768.543 28.514C765.834 28.514 764.268 30.503 764.268 33.437C764.268 36.407 766.059 38.18 768.66 38.18C770.469 38.18 772.215 37.181 772.557 35.282H770.991C770.757 36.335 769.821 36.893 768.633 36.893C766.824 36.893 765.951 35.498 765.951 33.734ZM765.96 32.609C765.951 31.223 766.779 29.774 768.534 29.774C770.217 29.774 771.018 31.007 771.018 32.609H765.96ZM778.666 28.514C775.921 28.514 774.382 30.485 774.382 33.383C774.382 36.506 776.146 38.18 778.666 38.18C780.637 38.18 782.149 37.001 782.392 35.129H780.943C780.781 36.065 779.971 36.911 778.693 36.911C776.911 36.911 775.975 35.516 775.975 33.365C775.975 30.989 777.082 29.855 778.675 29.855C779.953 29.855 780.763 30.656 780.925 31.637H782.401C782.149 29.738 780.664 28.514 778.666 28.514ZM788.369 38.18C791.141 38.18 792.608 36.227 792.608 33.383C792.608 30.251 790.943 28.514 788.378 28.514C785.624 28.514 784.103 30.467 784.103 33.383C784.103 36.488 785.786 38.18 788.369 38.18ZM788.378 36.866C786.515 36.866 785.759 35.309 785.759 33.347C785.759 31.133 786.686 29.819 788.378 29.819C790.205 29.819 790.961 31.358 790.961 33.347C790.961 35.534 790.043 36.866 788.378 36.866ZM798.205 38.18C799.519 38.189 800.653 37.613 800.995 36.218L801.166 38H802.489V28.694H800.833V34.751C800.833 36.164 799.924 36.884 798.556 36.884C797.035 36.884 796.297 36.056 796.297 34.841V28.694H794.632V35.012C794.632 37.109 796.27 38.162 798.205 38.18ZM812.508 28.694H810.951L808.467 35.912H808.314L805.839 28.694H804.273L807.639 38H809.16L812.508 28.694ZM814.315 38H815.971V32.213C815.971 30.665 817.177 30.035 818.662 30.134C818.851 30.134 819.184 30.161 819.364 30.242V28.631C819.211 28.55 818.923 28.514 818.653 28.514C817.474 28.514 816.367 29.144 815.899 30.485V28.694H814.315V38ZM823.047 24.995H821.346V26.723H823.047V24.995ZM823.002 28.694H821.391V38H823.002V28.694ZM825.916 38H827.572V32.213C827.572 30.665 828.778 30.035 830.263 30.134C830.452 30.134 830.785 30.161 830.965 30.242V28.631C830.812 28.55 830.524 28.514 830.254 28.514C829.075 28.514 827.968 29.144 827.5 30.485V28.694H825.916V38ZM840.84 28.514C838.095 28.514 836.556 30.485 836.556 33.383C836.556 36.506 838.32 38.18 840.84 38.18C842.811 38.18 844.323 37.001 844.566 35.129H843.117C842.955 36.065 842.145 36.911 840.867 36.911C839.085 36.911 838.149 35.516 838.149 33.365C838.149 30.989 839.256 29.855 840.849 29.855C842.127 29.855 842.937 30.656 843.099 31.637H844.575C844.323 29.738 842.838 28.514 840.84 28.514ZM848.04 33.734H854.709V33.122C854.709 30.296 853.251 28.514 850.632 28.514C847.923 28.514 846.357 30.503 846.357 33.437C846.357 36.407 848.148 38.18 850.749 38.18C852.558 38.18 854.304 37.181 854.646 35.282H853.08C852.846 36.335 851.91 36.893 850.722 36.893C848.913 36.893 848.04 35.498 848.04 33.734ZM848.049 32.609C848.04 31.223 848.868 29.774 850.623 29.774C852.306 29.774 853.107 31.007 853.107 32.609H848.049ZM869.011 40.898V28.694H867.346L867.328 30.314C866.905 29.549 865.978 28.514 864.268 28.514C861.838 28.514 860.497 30.26 860.497 33.221C860.497 36.677 862.162 38.18 864.403 38.18C866.068 38.18 866.941 37.109 867.328 36.317V40.898H869.011ZM864.718 36.884C863.017 36.884 862.108 35.525 862.108 33.275C862.108 30.944 863.188 29.81 864.718 29.81C866.446 29.81 867.346 31.223 867.346 33.275C867.346 35.282 866.446 36.884 864.718 36.884ZM875.18 38.18C876.494 38.189 877.628 37.613 877.97 36.218L878.141 38H879.464V28.694H877.808V34.751C877.808 36.164 876.899 36.884 875.531 36.884C874.01 36.884 873.272 36.056 873.272 34.841V28.694H871.607V35.012C871.607 37.109 873.245 38.162 875.18 38.18ZM884.025 24.995H882.324V26.723H884.025V24.995ZM883.98 28.694H882.369V38H883.98V28.694ZM713.987 59.18C715.319 59.18 716.462 58.703 717.182 57.254L717.308 59H718.73V52.502C718.73 50.558 717.524 49.514 715.103 49.514C712.844 49.514 711.458 50.513 711.359 52.322H712.826C713.051 51.215 713.951 50.747 715.022 50.738C716.453 50.738 717.119 51.458 717.119 52.592V53.321L715.463 53.366C712.277 53.438 710.918 54.419 710.918 56.48C710.918 58.181 712.178 59.18 713.987 59.18ZM714.482 57.983C713.339 57.983 712.529 57.371 712.529 56.318C712.529 54.941 713.6 54.41 715.742 54.374L717.119 54.347V55.94C717.119 56.975 715.733 57.983 714.482 57.983ZM721.326 61.898H723V57.317C723.387 58.109 724.26 59.18 725.925 59.18C728.373 59.18 729.831 57.416 729.831 54.221C729.831 51.017 728.283 49.514 726.06 49.514C724.35 49.514 723.423 50.549 723 51.314L722.982 49.694H721.326V61.898ZM725.61 57.884C723.882 57.884 722.982 56.282 722.982 54.275C722.982 52.223 723.882 50.81 725.61 50.81C727.311 50.81 728.22 52.16 728.22 54.275C728.22 56.75 727.14 57.884 725.61 57.884ZM732.049 61.898H733.723V57.317C734.11 58.109 734.983 59.18 736.648 59.18C739.096 59.18 740.554 57.416 740.554 54.221C740.554 51.017 739.006 49.514 736.783 49.514C735.073 49.514 734.146 50.549 733.723 51.314L733.705 49.694H732.049V61.898ZM736.333 57.884C734.605 57.884 733.705 56.282 733.705 54.275C733.705 52.223 734.605 50.81 736.333 50.81C738.034 50.81 738.943 52.16 738.943 54.275C738.943 56.75 737.863 57.884 736.333 57.884ZM746.498 59.18C749.27 59.18 750.737 57.227 750.737 54.383C750.737 51.251 749.072 49.514 746.507 49.514C743.753 49.514 742.232 51.467 742.232 54.383C742.232 57.488 743.915 59.18 746.498 59.18ZM746.507 57.866C744.644 57.866 743.888 56.309 743.888 54.347C743.888 52.133 744.815 50.819 746.507 50.819C748.334 50.819 749.09 52.358 749.09 54.347C749.09 56.534 748.172 57.866 746.507 57.866ZM752.949 59H754.605V53.213C754.605 51.665 755.811 51.035 757.296 51.134C757.485 51.134 757.818 51.161 757.998 51.242V49.631C757.845 49.55 757.557 49.514 757.287 49.514C756.108 49.514 755.001 50.144 754.533 51.485V49.694H752.949V59ZM764.451 50.909V49.685H762.354V46.985H761.13L760.725 49.694H759.168V50.909H760.68V56.75C760.68 58.244 761.193 59.045 763.128 59.045C763.803 59.045 764.271 58.982 764.505 58.892V57.776H763.488C762.615 57.776 762.354 57.686 762.354 56.696V50.909H764.451ZM767.691 54.734H774.36V54.122C774.36 51.296 772.902 49.514 770.283 49.514C767.574 49.514 766.008 51.503 766.008 54.437C766.008 57.407 767.799 59.18 770.4 59.18C772.209 59.18 773.955 58.181 774.297 56.282H772.731C772.497 57.335 771.561 57.893 770.373 57.893C768.564 57.893 767.691 56.498 767.691 54.734ZM767.7 53.609C767.691 52.223 768.519 50.774 770.274 50.774C771.957 50.774 772.758 52.007 772.758 53.609H767.7ZM784.081 59.18C786.259 59.18 786.988 57.821 787.222 57.092L787.402 59H788.68V45.626H786.997V51.17C786.7 50.567 785.728 49.514 783.946 49.514C781.426 49.514 780.148 51.413 780.148 54.311C780.148 57.497 781.66 59.18 784.081 59.18ZM784.378 57.902C782.704 57.902 781.822 56.561 781.822 54.23C781.822 51.845 782.875 50.81 784.405 50.81C786.259 50.81 786.979 52.052 786.997 54.23C786.997 56.831 786.259 57.902 784.378 57.902ZM792.652 54.734H799.321V54.122C799.321 51.296 797.863 49.514 795.244 49.514C792.535 49.514 790.969 51.503 790.969 54.437C790.969 57.407 792.76 59.18 795.361 59.18C797.17 59.18 798.916 58.181 799.258 56.282H797.692C797.458 57.335 796.522 57.893 795.334 57.893C793.525 57.893 792.652 56.498 792.652 54.734ZM792.661 53.609C792.652 52.223 793.48 50.774 795.235 50.774C796.918 50.774 797.719 52.007 797.719 53.609H792.661ZM808.226 59.117C808.46 59.117 808.784 59.063 809.063 58.973V57.893L808.559 57.884C807.902 57.839 807.515 57.389 807.515 56.444V45.626H805.877V56.606C805.877 57.911 806.219 59.117 808.226 59.117ZM813.848 59.18C815.18 59.18 816.323 58.703 817.043 57.254L817.169 59H818.591V52.502C818.591 50.558 817.385 49.514 814.964 49.514C812.705 49.514 811.319 50.513 811.22 52.322H812.687C812.912 51.215 813.812 50.747 814.883 50.738C816.314 50.738 816.98 51.458 816.98 52.592V53.321L815.324 53.366C812.138 53.438 810.779 54.419 810.779 56.48C810.779 58.181 812.039 59.18 813.848 59.18ZM814.343 57.983C813.2 57.983 812.39 57.371 812.39 56.318C812.39 54.941 813.461 54.41 815.603 54.374L816.98 54.347V55.94C816.98 56.975 815.594 57.983 814.343 57.983ZM827.536 45.995H825.772V47.723H827.536V45.995ZM827.491 59.414V49.694H825.826V59.36C825.826 60.224 825.529 60.557 824.692 60.62L823.773 60.665V61.772C823.773 61.772 823.926 61.988 824.944 61.988C826.843 61.988 827.491 61.151 827.491 59.414ZM834.019 59.18C836.791 59.18 838.258 57.227 838.258 54.383C838.258 51.251 836.593 49.514 834.028 49.514C831.274 49.514 829.753 51.467 829.753 54.383C829.753 57.488 831.436 59.18 834.019 59.18ZM834.028 57.866C832.165 57.866 831.409 56.309 831.409 54.347C831.409 52.133 832.336 50.819 834.028 50.819C835.855 50.819 836.611 52.358 836.611 54.347C836.611 56.534 835.693 57.866 834.028 57.866ZM842.172 45.995H840.471V47.723H842.172V45.995ZM842.127 49.694H840.516V59H842.127V49.694ZM846.142 54.734H852.811V54.122C852.811 51.296 851.353 49.514 848.734 49.514C846.025 49.514 844.459 51.503 844.459 54.437C844.459 57.407 846.25 59.18 848.851 59.18C850.66 59.18 852.406 58.181 852.748 56.282H851.182C850.948 57.335 850.012 57.893 848.824 57.893C847.015 57.893 846.142 56.498 846.142 54.734ZM846.151 53.609C846.142 52.223 846.97 50.774 848.725 50.774C850.408 50.774 851.209 52.007 851.209 53.609H846.151ZM861.977 59.18C863.309 59.18 864.452 58.703 865.172 57.254L865.298 59H866.72V52.502C866.72 50.558 865.514 49.514 863.093 49.514C860.834 49.514 859.448 50.513 859.349 52.322H860.816C861.041 51.215 861.941 50.747 863.012 50.738C864.443 50.738 865.109 51.458 865.109 52.592V53.321L863.453 53.366C860.267 53.438 858.908 54.419 858.908 56.48C858.908 58.181 860.168 59.18 861.977 59.18ZM862.472 57.983C861.329 57.983 860.519 57.371 860.519 56.318C860.519 54.941 861.59 54.41 863.732 54.374L865.109 54.347V55.94C865.109 56.975 863.723 57.983 862.472 57.983ZM872.736 59.18C874.05 59.189 875.184 58.613 875.526 57.218L875.697 59H877.02V49.694H875.364V55.751C875.364 57.164 874.455 57.884 873.087 57.884C871.566 57.884 870.828 57.056 870.828 55.841V49.694H869.163V56.012C869.163 58.109 870.801 59.162 872.736 59.18ZM887.975 59L884.393 54.167L887.705 49.694H885.887L883.466 52.961L881.045 49.694H879.236L882.53 54.167L878.948 59H880.766L883.457 55.355L886.166 59H887.975ZM711.719 80H716.039C719.36 80 721.043 78.857 721.043 76.499C721.043 75.032 720.359 73.808 718.307 73.367C720.089 72.737 720.719 71.756 720.719 70.379C720.719 68.183 719.063 66.986 715.904 66.986H711.719V80ZM713.384 72.71V68.363H715.985C717.83 68.363 719.108 69.074 719.108 70.586C719.108 72.233 717.569 72.71 716.219 72.71H713.384ZM713.384 78.614V74.123H716.219C717.965 74.123 719.351 74.798 719.351 76.427C719.351 77.912 718.19 78.614 716.021 78.614H713.384ZM723.918 66.986V80H726.771C731.496 80 733.71 77.732 733.71 73.412C733.71 69.299 731.721 67.067 726.942 67.004C725.844 66.995 724.071 66.986 723.918 66.986ZM725.628 68.417H726.843C730.065 68.417 731.955 69.677 731.955 73.439C731.955 77.201 729.993 78.569 726.771 78.569H725.628V68.417ZM736.399 66.986V80H739.252C743.977 80 746.191 77.732 746.191 73.412C746.191 69.299 744.202 67.067 739.423 67.004C738.325 66.995 736.552 66.986 736.399 66.986ZM738.109 68.417H739.324C742.546 68.417 744.436 69.677 744.436 73.439C744.436 77.201 742.474 78.569 739.252 78.569H738.109V68.417ZM748.879 66.986V80H750.544V66.986H748.879Z" fill="white"/>
        <path onClick={onClick} d="M1014.6 121.697C1036.74 138.175 1063.08 151.458 1070.63 171.635C1078.18 191.644 1066.77 218.379 1049.66 236.034C1032.55 253.521 1009.74 261.76 984.577 276.388C959.416 291.017 931.906 312.035 911.609 307.327C891.48 302.451 878.396 271.849 864.138 243.769C849.88 215.521 834.448 189.626 836.126 164.573C837.635 139.352 856.422 114.971 879.403 98.661C902.383 82.1829 929.725 74.112 952.203 79.8289C974.848 85.5458 992.461 105.219 1014.6 121.697Z" fill="#60D890"/>
        <path d="M933 134.36C935.375 134.36 937.3 131.817 937.3 128.68C937.3 125.543 935.375 123 933 123C930.625 123 928.7 125.543 928.7 128.68C928.7 131.817 930.625 134.36 933 134.36Z" fill="black"/>
        <path d="M974.72 134.36C977.095 134.36 979.02 131.817 979.02 128.68C979.02 125.543 977.095 123 974.72 123C972.346 123 970.42 125.543 970.42 128.68C970.42 131.817 972.346 134.36 974.72 134.36Z" fill="black"/>
        <path d="M947.28 139.25C949.535 140.695 952.157 141.464 954.835 141.464C957.513 141.464 960.135 140.695 962.39 139.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M922.15 155.5C930.517 155.5 937.3 148.717 937.3 140.35C937.3 131.983 930.517 125.2 922.15 125.2C913.783 125.2 907 131.983 907 140.35C907 148.717 913.783 155.5 922.15 155.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M987.52 155.5C995.887 155.5 1002.67 148.717 1002.67 140.35C1002.67 131.983 995.887 125.2 987.52 125.2C979.153 125.2 972.37 131.983 972.37 140.35C972.37 148.717 979.153 155.5 987.52 155.5Z" fill="#EBE0FF"/>
        </g>
        <path d="M1025.04 343.148C1050.9 378.215 1070.11 408.113 1072.69 438.381C1075.28 469.018 1061.24 500.024 1044.98 531.03C1028.73 562.036 1010.26 592.673 975.903 623.679C941.917 654.316 892.045 685.322 851.409 676.463C811.143 667.973 779.373 620.357 779.003 575.693C778.634 531.399 808.926 490.058 819.639 448.347C830.722 406.268 821.856 364.188 837.741 327.276C853.626 290.364 893.523 258.989 930.096 263.418C966.299 267.848 999.177 308.082 1025.04 343.148Z" fill="#9567EF"/>
        <path d="M932 346.36C934.375 346.36 936.3 343.817 936.3 340.68C936.3 337.543 934.375 335 932 335C929.625 335 927.7 337.543 927.7 340.68C927.7 343.817 929.625 346.36 932 346.36Z" fill="black"/>
        <path d="M973.72 346.36C976.095 346.36 978.02 343.817 978.02 340.68C978.02 337.543 976.095 335 973.72 335C971.346 335 969.42 337.543 969.42 340.68C969.42 343.817 971.346 346.36 973.72 346.36Z" fill="black"/>
        <path d="M946.28 351.25C948.535 352.695 951.157 353.464 953.835 353.464C956.513 353.464 959.135 352.695 961.39 351.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M921.15 367.5C929.517 367.5 936.3 360.717 936.3 352.35C936.3 343.983 929.517 337.2 921.15 337.2C912.783 337.2 906 343.983 906 352.35C906 360.717 912.783 367.5 921.15 367.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M986.52 367.5C994.887 367.5 1001.67 360.717 1001.67 352.35C1001.67 343.983 994.887 337.2 986.52 337.2C978.153 337.2 971.37 343.983 971.37 352.35C971.37 360.717 978.153 367.5 986.52 367.5Z" fill="#EBE0FF"/>
        </g>
        <path d="M849.858 251.915C870.839 266.081 879.027 298.682 880.732 329.404C882.268 359.956 877.321 388.63 862.651 409.624C847.981 430.447 823.759 443.59 797.32 454.684C771.051 465.778 742.735 474.824 715.954 469.363C689.344 464.072 664.098 444.273 644.311 417.646C624.524 391.02 610.195 357.567 616.507 328.892C622.818 300.218 649.94 276.322 677.744 263.351C705.378 250.379 733.523 248.331 764.569 245.088C795.443 242.015 828.877 237.748 849.858 251.915Z" fill="#F09065"/>
        <path d="M700 395.36C702.375 395.36 704.3 392.817 704.3 389.68C704.3 386.543 702.375 384 700 384C697.625 384 695.7 386.543 695.7 389.68C695.7 392.817 697.625 395.36 700 395.36Z" fill="black"/>
        <path d="M741.72 395.36C744.095 395.36 746.02 392.817 746.02 389.68C746.02 386.543 744.095 384 741.72 384C739.346 384 737.42 386.543 737.42 389.68C737.42 392.817 739.346 395.36 741.72 395.36Z" fill="black"/>
        <path d="M714.28 400.25C716.535 401.695 719.157 402.464 721.835 402.464C724.513 402.464 727.135 401.695 729.39 400.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M689.15 416.5C697.517 416.5 704.3 409.717 704.3 401.35C704.3 392.983 697.517 386.2 689.15 386.2C680.783 386.2 674 392.983 674 401.35C674 409.717 680.783 416.5 689.15 416.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M754.52 416.5C762.887 416.5 769.67 409.717 769.67 401.35C769.67 392.983 762.887 386.2 754.52 386.2C746.153 386.2 739.37 392.983 739.37 401.35C739.37 409.717 746.153 416.5 754.52 416.5Z" fill="#EBE0FF"/>
        </g>
        <path d="M714.603 491.697C736.744 508.175 763.08 521.458 770.628 541.635C778.177 561.644 766.77 588.379 749.66 606.034C732.551 623.521 709.738 631.76 684.577 646.388C659.416 661.017 631.906 682.035 611.609 677.327C591.48 672.451 578.396 641.849 564.138 613.769C549.88 585.521 534.448 559.626 536.126 534.573C537.635 509.352 556.422 484.971 579.403 468.661C602.383 452.183 629.725 444.112 652.203 449.829C674.848 455.546 692.461 475.219 714.603 491.697Z" fill="#D95D71"/>
        <path d="M703 558.36C705.375 558.36 707.3 555.817 707.3 552.68C707.3 549.543 705.375 547 703 547C700.625 547 698.7 549.543 698.7 552.68C698.7 555.817 700.625 558.36 703 558.36Z" fill="black"/>
        <path d="M744.72 558.36C747.095 558.36 749.02 555.817 749.02 552.68C749.02 549.543 747.095 547 744.72 547C742.346 547 740.42 549.543 740.42 552.68C740.42 555.817 742.346 558.36 744.72 558.36Z" fill="black"/>
        <path d="M717.28 563.25C719.535 564.695 722.157 565.464 724.835 565.464C727.513 565.464 730.135 564.695 732.39 563.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M692.15 579.5C700.517 579.5 707.3 572.717 707.3 564.35C707.3 555.983 700.517 549.2 692.15 549.2C683.783 549.2 677 555.983 677 564.35C677 572.717 683.783 579.5 692.15 579.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M757.52 579.5C765.887 579.5 772.67 572.717 772.67 564.35C772.67 555.983 765.887 549.2 757.52 549.2C749.153 549.2 742.37 555.983 742.37 564.35C742.37 572.717 749.153 579.5 757.52 579.5Z" fill="#EBE0FF"/>
        </g>
        <path d="M535.485 577.936C528.576 610.651 521.236 636.917 505.204 653.841C488.96 670.954 464.023 678.726 437.955 685.227C411.888 691.727 384.901 696.769 349.598 692.893C314.695 689.04 271.477 676.269 255.823 648.453C240.147 621.038 251.235 578.532 276.651 555.534C301.855 532.724 341.01 528.998 370.387 513.859C400.164 498.744 419.764 472.193 449.028 462.467C478.293 452.742 516.635 459.606 532.754 482.832C548.685 505.846 542.394 545.221 535.485 577.936Z" fill="#63CBCF"/>
        <path d="M447 529.36C449.375 529.36 451.3 526.817 451.3 523.68C451.3 520.543 449.375 518 447 518C444.625 518 442.7 520.543 442.7 523.68C442.7 526.817 444.625 529.36 447 529.36Z" fill="black"/>
        <path d="M488.72 529.36C491.095 529.36 493.02 526.817 493.02 523.68C493.02 520.543 491.095 518 488.72 518C486.346 518 484.42 520.543 484.42 523.68C484.42 526.817 486.346 529.36 488.72 529.36Z" fill="black"/>
        <path d="M461.28 534.25C463.535 535.695 466.157 536.464 468.835 536.464C471.513 536.464 474.135 535.695 476.39 534.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M436.15 550.5C444.517 550.5 451.3 543.717 451.3 535.35C451.3 526.983 444.517 520.2 436.15 520.2C427.783 520.2 421 526.983 421 535.35C421 543.717 427.783 550.5 436.15 550.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M501.52 550.5C509.887 550.5 516.67 543.717 516.67 535.35C516.67 526.983 509.887 520.2 501.52 520.2C493.153 520.2 486.37 526.983 486.37 535.35C486.37 543.717 493.153 550.5 501.52 550.5Z" fill="#EBE0FF"/>
        </g>
        <path d="M576.951 462.441C556.316 469.807 532.371 466.076 500.79 465.394C469.496 464.61 430.566 466.875 403.915 448.763C377.264 430.65 362.892 392.161 372.75 361.825C382.607 331.488 416.501 309.212 444.534 278.203C472.568 247.195 494.741 207.454 522.251 202.158C550.049 196.759 583.081 225.517 605.91 254.202C629.026 282.785 641.837 311.007 644.424 338.194C647.206 365.472 639.571 391.623 627.24 414.118C614.806 436.327 597.677 454.881 576.951 462.441Z" fill="#EFCE67"/>
        <path d="M520 283.36C522.375 283.36 524.3 280.817 524.3 277.68C524.3 274.543 522.375 272 520 272C517.625 272 515.7 274.543 515.7 277.68C515.7 280.817 517.625 283.36 520 283.36Z" fill="black"/>
        <path d="M561.72 283.36C564.095 283.36 566.02 280.817 566.02 277.68C566.02 274.543 564.095 272 561.72 272C559.346 272 557.42 274.543 557.42 277.68C557.42 280.817 559.346 283.36 561.72 283.36Z" fill="black"/>
        <path d="M534.28 288.25C536.535 289.695 539.157 290.464 541.835 290.464C544.513 290.464 547.135 289.695 549.39 288.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M509.15 304.5C517.517 304.5 524.3 297.717 524.3 289.35C524.3 280.983 517.517 274.2 509.15 274.2C500.783 274.2 494 280.983 494 289.35C494 297.717 500.783 304.5 509.15 304.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M574.52 304.5C582.887 304.5 589.67 297.717 589.67 289.35C589.67 280.983 582.887 274.2 574.52 274.2C566.153 274.2 559.37 280.983 559.37 289.35C559.37 297.717 566.153 304.5 574.52 304.5Z" fill="#EBE0FF"/>
        </g>
        <path d="M30.427 629.951C19.8943 606.991 28.7265 568.798 42.0076 535C55.3478 501.448 73.1369 472.29 95.2735 454.977C117.329 437.848 143.591 432.502 170.703 430.177C197.674 427.79 225.354 428.362 244.832 444.039C264.251 459.47 275.609 490.069 279.2 526.047C282.791 562.025 278.615 603.382 259.701 632.042C240.786 660.701 206.992 676.6 177.857 680.454C148.862 684.37 124.668 676.304 97.511 668.469C70.5762 660.512 40.9598 652.91 30.427 629.951Z" fill="#60D890"/>
        <path d="M167 497.36C169.375 497.36 171.3 494.817 171.3 491.68C171.3 488.543 169.375 486 167 486C164.625 486 162.7 488.543 162.7 491.68C162.7 494.817 164.625 497.36 167 497.36Z" fill="black"/>
        <path d="M208.72 497.36C211.095 497.36 213.02 494.817 213.02 491.68C213.02 488.543 211.095 486 208.72 486C206.346 486 204.42 488.543 204.42 491.68C204.42 494.817 206.346 497.36 208.72 497.36Z" fill="black"/>
        <path d="M181.28 502.25C183.535 503.695 186.157 504.464 188.835 504.464C191.513 504.464 194.135 503.695 196.39 502.25" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
        <g>
          <path d="M156.15 518.5C164.517 518.5 171.3 511.717 171.3 503.35C171.3 494.983 164.517 488.2 156.15 488.2C147.783 488.2 141 494.983 141 503.35C141 511.717 147.783 518.5 156.15 518.5Z" fill="#EBE0FF"/>
        </g>
        <g>
          <path d="M221.52 518.5C229.887 518.5 236.67 511.717 236.67 503.35C236.67 494.983 229.887 488.2 221.52 488.2C213.153 488.2 206.37 494.983 206.37 503.35C206.37 511.717 213.153 518.5 221.52 518.5Z" fill="#EBE0FF"/>
        </g>
        <rect x="805" y="80" width="26" height="27" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_172_56" transform="translate(0 -0.00798505) scale(0.00917431 0.00883452)"/>
          </pattern>
          <image id="image0_172_56" width="109" height="115" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>

    </div>
  )
}

export default Shuffle